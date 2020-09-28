import NOTES from './note'
export default (note) => {
    return NOTES.includes(note) && note.includes('#')
}
