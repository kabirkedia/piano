import NOTES from '../AudioFiles/note'
export default (note) => {
    return NOTES.includes(note) && note.includes('#')
}
