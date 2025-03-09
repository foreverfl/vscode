#!/bin/bash

# Fetch the latest code from upstream
git fetch upstream

# Get the list of release notes files (v+number.md format)
RELEASE_NOTES=$(git ls-tree -r --name-only upstream/main release-notes/ | grep -E 'v[0-9]+(_[0-9]+)*\.md')

# Sort the versions and get the latest one
LATEST_RELEASE=$(echo "$RELEASE_NOTES" | sort -V | tail -n 1)

# Remove 'release-notes/' prefix and '.md' extension
LATEST_RELEASE=$(echo "$LATEST_RELEASE" | sed 's|release-notes/||' | sed 's|\.md||')

# Save the latest upstream version to version.yaml
yq -i '.origin_version = "'$LATEST_RELEASE'"' version.yaml

echo "Latest release note file: $LATEST_RELEASE"
echo "Saved to version.yaml"