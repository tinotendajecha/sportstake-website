from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


def main() -> None:
    project_root = Path(__file__).resolve().parents[1]
    public_dir = project_root / "public"
    public_dir.mkdir(parents=True, exist_ok=True)

    colors = {
        "bg": (0, 112, 243, 255),
        "text": (255, 255, 255, 255),
        "outline": (255, 255, 255, 255),
    }
    icons = [
        (192, public_dir / "icon-192x192.png"),
        (512, public_dir / "icon-512x512.png"),
        (512, public_dir / "icon-maskable-512x512.png"),
    ]

    font = ImageFont.load_default()

    for size, path in icons:
        img = Image.new("RGBA", (size, size), colors["bg"])
        draw = ImageDraw.Draw(img)

        padding = size // 12
        draw.rounded_rectangle(
            [(padding, padding), (size - padding, size - padding)],
            radius=size // 5,
            outline=colors["outline"],
            width=max(6, size // 32),
        )
        draw.text(
            (size // 2, size // 2),
            "ST",
            fill=colors["text"],
            anchor="mm",
            font=font,
        )
        img.save(path, optimize=True)


if __name__ == "__main__":
    main()

