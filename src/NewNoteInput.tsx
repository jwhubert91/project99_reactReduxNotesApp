import React, { ChangeEvent, ReactElement, useState } from 'react'

interface NewNoteInputProps {
  addNote(note: string): void;
}

export default function NewNoteInput(
  {addNote}: NewNoteInputProps):
  ReactElement
{
  const [ note, setNote ] = useState("");

  const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value)
  }

  const onAddNoteClick = () => {
    addNote( note )
    setNote("")
  }

  return (
    <div>
      <input
        type="text"
        name="note"
        placeholder="Note"
        onChange={updateNote}
        value={note}
      />
      <button onClick={ onAddNoteClick }>Add note</button>
    </div>
  )
}