import React from 'react'
import { Note } from '../../models/note.modle';
import {Card,Button} from 'react-bootstrap';

type INotesProps = {
  note:Note,
  handleDelete:(id: string) => void
}

const Notes = ({note,handleDelete}: INotesProps) => {
  return (
    <div className="mb-3">
      <Card style={{backgroundColor:note.color}}>
       <Card.Body>
       <Card.Title>{note.title}</Card.Title>
        <Card.Text>{note.text}</Card.Text>
        <Card.Subtitle className='text-muted'>{note.date}</Card.Subtitle>
        <Button className=" mt-2" variant='danger' onClick={()=>handleDelete(note.id)}>Delete</Button>
       </Card.Body>
      </Card>
    </div>
  )
}

export default Notes