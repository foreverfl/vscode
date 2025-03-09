#!/bin/bash

# Get the list of tags from the local git repository
TAGS=$(git tag | grep -E '^v[0-9]+(_[0-9]+)*$')

# Sort the tags and find the latest one
LATEST_TAG=$(echo "$TAGS" | sort -V | tail -n 1)

# Output the latest tag
echo "Latest tag: $LATEST_TAG"

# Save the latest origin version to version.yaml
yq -i '.upstream_version = "'$LATEST_TAG'"' version.yaml

echo "Saved latest tag to version.yaml"