import React,{useRef,useState} from 'react'
import {Form,Button,Alert} from 'react-bootstrap';
import { Note } from '../../models/note.modle';

type ICreateNoteProps = {
  notes:Note[],
  setNotes:React.Dispatch<React.SetStateAction<Note[]>>
}

const CreateNote = ({notes,setNotes}: ICreateNoteProps) => {

  const[error,setError] = useState<string>("");
  const titleRef=useRef<HTMLInputElement | null>(null);
  const textRef=useRef<HTMLTextAreaElement | null>(null);
  const colorRef=useRef<HTMLInputElement | null>(null);

const handleSubmit=(e: React.FormEvent<HTMLFormElement>):void=>{
  e.preventDefault();
  if(titleRef.current?.value === "" || textRef.current?.value === ""){
    return setError("All Fields are required")
  }
  setError("");
  setNotes([...notes,{
    id:(new Date()).toString(),
    title:(titleRef.current as HTMLInputElement).value,
    text:(textRef.current as HTMLTextAreaElement).value,
    color:(colorRef.current as HTMLInputElement).value,
    date:(new Date()).toString()
  }]);

  (titleRef.current as HTMLInputElement).value ="";
  (textRef.current as HTMLTextAreaElement).value="";

}
  return (
    <>
      <h2>CreateNote</h2>
      {error && <Alert variant='danger'>{error}</Alert>}
      <Form className='mt-3 mb-3' onSubmit={(e)=> handleSubmit(e)}>
        <Form.Group className='mb-3' controlId='formBasicTitle'>
          <Form.Label>title</Form.Label>
          <Form.Control type='text' placeholder='Enter Title form the Note' ref={titleRef}/>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicText'>
          <Form.Label>title</Form.Label>
          <Form.Control type='text' placeholder='Enter your Note' as="textarea" rows={4} ref={textRef}/>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label htmlFor="colorInput">Notes Color</Form.Label>
          <Form.Control type='color' id="colorInput"defaultValue="#dfdfdf" title="choose your color" ref={colorRef}/>
        </Form.Group>
        <Button type="submit" variant='primary'>Submit</Button>

      </Form>
    </>
  )
}

export default CreateNote