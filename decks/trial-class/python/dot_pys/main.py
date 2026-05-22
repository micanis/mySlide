import numpy as np
from PIL import Image
import sys
from pathlib import Path


def split_rgb_channels(input_path: str) -> None:
    """入力画像をR, G, Bチャンネルに分離して保存する"""
    img = Image.open(input_path).convert("RGB")
    img_array = np.array(img)

    input_file = Path(input_path)
    stem = input_file.stem
    suffix = input_file.suffix
    output_dir = input_file.parent

    # R, G, Bチャンネルをそれぞれ抽出
    for i, color in enumerate(["R", "G", "B"]):
        channel_array = np.zeros_like(img_array)
        channel_array[:, :, i] = img_array[:, :, i]

        channel_img = Image.fromarray(channel_array)
        output_path = output_dir / f"{stem}_{color}{suffix}"
        channel_img.save(output_path)
        print(f"Saved: {output_path}")


def main():
    if len(sys.argv) < 2:
        print("Usage: python main.py <image_path>")
        sys.exit(1)

    split_rgb_channels(sys.argv[1])


if __name__ == "__main__":
    main()
