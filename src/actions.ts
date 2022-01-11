export type Action = {type: "ADD_NOTE", payload: string}

export const addNotes = (note:string):Action => ({
  type: "ADD_NOTE",
  payload: note,
})