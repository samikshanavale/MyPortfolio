interface WaveDividerProps {
  className?: string;
  flip?: boolean;
}

export default function WaveDivider({ className = '', flip = false }: WaveDividerProps) {
  return (
    <div className={`relative w-full ${className}`}>
      <img
  src="img/end1.png"
  alt="divider"
  className="absolute top-0 left-0 w-full -translate-y-[55%] pointer-events-none select-none"
/>

    </div>
  );
}
