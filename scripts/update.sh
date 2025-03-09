#!/bin/bash

# Read version information from YAML file
ORIGIN_VERSION=$(yq '.origin_version' version.yaml)
UPSTREAM_VERSION=$(yq '.upstream_version' version.yaml)

echo "🔍 Checking current version status..."
echo "origin_version: $ORIGIN_VERSION"
echo "upstream_version: $UPSTREAM_VERSION"

# If versions are different, update the repository
if [ "$ORIGIN_VERSION" != "$UPSTREAM_VERSION" ]; then
    echo "🚀 Update required: upstream_version ($UPSTREAM_VERSION) is different from origin_version ($ORIGIN_VERSION)."

    # Move into the submodule directory
    cd original

    # Fetch the latest changes from upstream
    echo "🔄 Fetching the latest changes from upstream..."
    git fetch origin

    echo "🌲 Updating the 'original' submodule..."
    git checkout main
    git pull origin main

    # Move back to the main repository
    cd ..

    # Stage the submodule update
    echo "✅ Staging updated submodule..."
    git add original

    # Display modified files only (short format)
    echo "📝 Modified files:"
    git status --short original/ | awk '{print $2}'

    # Show modified files with git diff (only names)
    echo "🔍 Preview of changes:"
    git diff --name-only original/

    # Update version.yaml with the latest upstream version
    echo "📌 Updating version.yaml..."
    yq -i '.origin_version = "'$UPSTREAM_VERSION'"' version.yaml

    # Stage and commit the changes
    echo "📌 Committing changes..."
    git add version.yaml
    git commit -m "Updated original submodule to latest upstream version ($UPSTREAM_VERSION)"

    echo "✅ Update complete! The latest upstream version has been applied."
else
    echo "✅ Everything is up to date. No update required."
fi
