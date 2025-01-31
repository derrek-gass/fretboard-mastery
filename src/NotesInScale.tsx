

function NotesInScale(props: { notes: string[] }) {

    return (
      <>
      <div style={{justifyContent: "center", display: "flex"}}>
        {props.notes.map((note, interval) => (
          <span style={{width: "50px", minWidth: "25px", textAlign: "center"}}
                key={interval}>{note}</span>
        ))}
      </div>
      </>
    );
}

export default NotesInScale;