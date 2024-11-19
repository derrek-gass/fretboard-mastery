

function GuitarString(props: { notes: string[], keys: string[], string: string, }) {
  const {notes, keys, string} = props;
  const frets = 24;

  function buildScaleForString(string: string, frets: number) {
    const stringIndex = props.keys.indexOf(string);

    let spans = [];
    for (let i = 0; i < frets; i++) {
      const note = keys[(stringIndex + i) % keys.length];
      const stringWidth = 48 - i;
      if (notes.includes(note)) {
        spans.push(
            <span style={{backgroundColor: "green", borderRadius: "25px", padding: "5px", display: "flex"}}>
              <span style={{marginRight: `${stringWidth}px`, textAlign: "center"}}>{note}</span>
            </span>
            );
      } else {
        spans.push(<span style={{marginRight: `${stringWidth}px`, textAlign: "center", padding: "5px", display: "flex"}}>{note}</span>);
      }
    }
    return spans;
  }

    return (
      <>
      <div style={{justifyContent: "center", display: "flex"}}>
        {buildScaleForString(string, frets)}
      </div>
      </>
    );
}

export default GuitarString;