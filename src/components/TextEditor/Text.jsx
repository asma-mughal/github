import React, {useState} from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
const Text = () => {
    const [value, setValue] = useState('');
    const modules ={
        toolbar : [
            [{header: [1,2,3,4,5,6, false]}],
            [{ font: []}],
            [{size : []}],
            ["bold" , "italic", "underline", "strike", "blackquote"]
        ],

    }
    const generateQuestions = (content) => {
      // Implement your logic to generate relevant questions based on the content
      // You can have a predefined set of questions or use an algorithm to dynamically generate questions
      // Return an array of generated questions
      const questions = [];
  
      // Example: Generate questions based on specific keywords or patterns in the content
      if (content.includes('project')) {
        questions.push('What is the scope of the project?');
      }
      if (content.includes('scope')) {
        questions.push('What are the project deliverables?');
      }
      if (content.includes('budget')) {
        questions.push('What is the budget for the project?');
      }
      if (content.includes('deadline')) {
        questions.push('What is the project deadline?');
      }
  
      return questions;
    };
  
    // Event handler for content change
    const handleContentChange = (content) => {
      setValue(content);
  
      // Generate and update the questions based on the content
      const generatedQuestions = generateQuestions(content);
      setQuestions(generatedQuestions);
    };
  
    const [questions, setQuestions] = useState([]);
  
  return (
    <div className='flex flex-col  m-5 '>
          <div class="pt-6 pb-12 ">
  <div id="card" class="">
    <h2 class="text-center font-poppins  uppercase text-4xl xl:text-5xl">Single RFP</h2>
    <div class="container w-100 lg:w-4/5 mx-auto flex flex-col">
      <div v-for="card in cards" class="flex flex-col md:flex-row overflow-hidden
        bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
   
        <div class="h-64 w-auto md:w-1/2">
          <img class="inset-0 h-full w-full object-cover object-center"
           src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </div>
        <div class="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
          <h3 class="font-semibold text-lg leading-tight truncate">tilte</h3>
          <p class="mt-2">
          excerpt
          </p>
          <p class="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
            author  &bull; date
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="flex h-full">
      <div className="w-1/2 border-r p-4">
        <ReactQuill
          value={value}
          onChange={handleContentChange}
          className="h-full"
        />
      </div>
      <div className="w-1/2 p-4 overflow-y-auto">
        <h2 className="mb-2">Relevant Questions:</h2>
        <ul>
          {questions.map((question, index) => (
            <li key={index}>{question}</li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Text
