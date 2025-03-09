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

    # Fetch the latest changes from upstream
    echo "🔄 Fetching the latest changes from upstream..."
    git fetch upstream

    # Pull the latest changes from upstream into the "original" directory using subtree
    echo "🌲 Updating the 'original' directory using git subtree..."
    git subtree pull --prefix=original --squash upstream main

    # Display modified files only (short format)
    echo "📝 Modified files:"
    git status --short original/ | awk '{print $2}'

    # Show modified files with git diff (only names)
    echo "🔍 Preview of changes:"
    git diff --name-only original/

    # Update version.yaml with the latest upstream version
    echo "📌 Updating version.yaml..."
    yq -i '.origin_version = "'$UPSTREAM_VERSION'"' version.yaml

    echo "✅ Update complete! The latest upstream version has been applied."
else
    echo "✅ Everything is up to date. No update required."
fi
