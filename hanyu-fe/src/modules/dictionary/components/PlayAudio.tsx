import VolumeUpIcon from "@mui/icons-material/VolumeUp";

type Props = {
  src: string;
  isMale?: boolean;
};

export default function PlayAudio({ src, isMale }: Props) {
  const audio = new Audio(src);

  const start = () => {
    audio.play();
  };

  return (
    <VolumeUpIcon
      sx={{
        cursor: "pointer",
        color: isMale ? "#78C1F3" : "#FF52A2",
        "&:hover": {
          opacity: 0.7,
        },
      }}
      onClick={start}
    />
  );
}
