/**
React component that renders a button with an X or O icon based on the current state of the board.
@param {object} props - Component props.
@param {function} props.handleClick - Click event handler for the button.
@param {number} props.index - Index of the button on the game grid.
@param {(string | null)[]} props.board - Current state of the game board.
@param {null} props.board - Current state of the game board.
@param {boolean} props.xIsNext - Indicates whether it's X's turn or O's turn.
@returns {JSX.Element} React element representing a button with an X or O icon.
*/
function GameButton({
  handleClick,
  index,
  board,
  xIsNext,
}: {
  handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  index: number;
  board: (string | null)[];
  xIsNext: boolean;
}): JSX.Element {
  // TODO: The screen reader is reading wrong variables for alt
  const alt = xIsNext ? 'X' : 'O';

  return (
    <button
      onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        handleClick(e);
      }}
      className='flex h-24 w-24 cursor-pointer items-center justify-center rounded-xl border-none bg-grid-bg shadow-[inset_0px_-8px_0px_#10212A]'
    >
      {/* @ts-ignore */}
      {board[index] != null ? <img src={board[index]} /> : undefined}
    </button>
  );
}

export default GameButton;
