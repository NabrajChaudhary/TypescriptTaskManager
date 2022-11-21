import React,{useState} from 'react'
import {Routes,Route} from "react-router-dom";
import Header from './components/Header';
import NotesList from './components/NoteList';
import {Note} from "./models/note.modle";
import CreateNotes from './components/CreateNote';
import {Container,Row,Col} from "react-bootstrap"
import CreateNote from './components/CreateNote';


const App = () => {
 const [notes,setNotes]= useState<Note[]>([{
  id:(new Date).toString(),
  title:"Type the task",
  text:"You can make note Here",
  color:"#dfdfdf",
  date:(new Date).toString()
 }]);
 
 console.log(notes)

  return (
    <section>
    <Header/>
   <Container className="mt-5">
    <Row>
      <Col>
      <NotesList notes={notes} setNotes={setNotes}/>
      </Col>
    </Row>
    <Row>
      <Col>
      <CreateNote notes={notes} setNotes={setNotes}/>
      </Col>
    </Row>
    
   </Container>
    
      
      
    </section>
  )
}

export default App