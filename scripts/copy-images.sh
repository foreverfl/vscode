#!/bin/bash

# 원본 서브모듈 디렉토리
SRC_DIR="original"

# 복사할 대상 디렉토리
DEST_DIR="."

# images 폴더를 재귀적으로 찾아서 복사
find "$SRC_DIR" -type d -name "images" | while read -r img_dir; do
  # 원본 디렉토리 구조에서 "original/"을 제거한 새 경로 생성
  new_path="${img_dir/$SRC_DIR\//}"
  
  # 새로운 위치로 images 폴더 이동
  mkdir -p "$DEST_DIR/$new_path"
  cp -r "$img_dir"/* "$DEST_DIR/$new_path/"
  
  echo "✅ Moved $img_dir -> $DEST_DIR/$new_path"
done