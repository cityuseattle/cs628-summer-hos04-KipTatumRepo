import './App.css';
import { useState } from 'react';
//import { sculptureList } from './data.js';


//////////////////////// SHARING STATE BETWEEN COMPONENTS ///////////////////////////
export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
      </Panel>
    </>
  );
}

function Panel({
  title,
  children,
  isActive,
  onShow
}) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow}>
          Show
        </button>
      )}
    </section>
  );
}

//////////////////////// CHOOSING THE RIGHT STATE STRUCTURE SIMPLIFIED //////////////
// export default function Form() {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');

//   const fullName = firstName + ' ' + lastName;

//   function handleFirstNameChange(e) {
//     setFirstName(e.target.value);
//   }

//   function handleLastNameChange(e) {
//     setLastName(e.target.value);
//   }

//   return (
//     <>
//       <h2>Let’s check you in</h2>
//       <label>
//         First name:{' '}
//         <input
//           value={firstName}
//           onChange={handleFirstNameChange}
//         />
//       </label>
//       <label>
//         Last name:{' '}
//         <input
//           value={lastName}
//           onChange={handleLastNameChange}
//         />
//       </label>
//       <p>
//         Your ticket will be issued to: <b>{fullName}</b>
//       </p>
//     </>
//   );
// }
//////////////////////// CHOOSING THE RIGHT STATE STRUCTURE /////////////////////////
// export default function Form() {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [fullName, setFullName] = useState('');

//   function handleFirstNameChange(e) {
//     setFirstName(e.target.value);
//     setFullName(e.target.value + ' ' + lastName);
//   }

//   function handleLastNameChange(e) {
//     setLastName(e.target.value);
//     setFullName(firstName + ' ' + e.target.value);
//   }

//   return (
//     <>
//       <h2>Let's check you in</h2>
//       <label>
//         First name:{' '}
//         <input
//           value={firstName}
//           onChange={handleFirstNameChange}
//         />
//       </label>
//       <label>
//         Last name:{' '}
//         <input
//           value={lastName}
//           onChange={handleLastNameChange}
//         />
//       </label>
//       <p>
//         Your ticket will be issued to: <b>{fullName}</b>
//       </p>
//     </>
//   );
// }
//////////////////////// REACTING TO USER INPUT WITH STATE //////////////////////////
// export default function Form() {
//   const [answer, setAnswer] = useState('');
//   const [error, setError] = useState(null);
//   const [status, setStatus] = useState('typing');

//   if (status === 'success') {
//     return <h1>That's right!</h1>
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setStatus('submitting');
//     try {
//       await submitForm(answer);
//       setStatus('success');
//     } catch (err) {
//       setStatus('typing');
//       setError(err);
//     }
//   }

//   function handleTextareaChange(e) {
//     setAnswer(e.target.value);
//   }

//   return (
//     <>
//       <h2>City quiz</h2>
//       <p>
//         In which city is there a billboard that turns air into drinkable water?
//       </p>
//       <form onSubmit={handleSubmit}>
//         <textarea
//           value={answer}
//           onChange={handleTextareaChange}
//           disabled={status === 'submitting'}
//         />
//         <br />
//         <button disabled={
//           answer.length === 0 ||
//           status === 'submitting'
//         }>
//           Submit
//         </button>
//         {error !== null &&
//           <p className="Error">
//             {error.message}
//           </p>
//         }
//       </form>
//     </>
//   );
// }

// function submitForm(answer) {
//   // Pretend it's hitting the network.
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let shouldError = answer.toLowerCase() !== 'lima'
//       if (shouldError) {
//         reject(new Error('Good guess but a wrong answer. Try again!'));
//       } else {
//         resolve();
//       }
//     }, 1500);
//   });
// }
//////////////////////// UPDATING ARRAYS IN STATE //////////////////////////////////
// const initialList = [
//   { id: 0, title: 'Big Bellies', seen: false },
//   { id: 1, title: 'Lunar Landscape', seen: false },
//   { id: 2, title: 'Terracotta Army', seen: true },
// ];

// export default function BucketList() {
//   const [list, setList] = useState(
//     initialList
//   );

//   function handleToggle(artworkId, nextSeen) {
//     setList(list.map(artwork => {
//       if (artwork.id === artworkId) {
//         return { ...artwork, seen: nextSeen };
//       } else {
//         return artwork;
//       }
//     }));
//   }

//   return (
//     <>
//       <h1>Art Bucket List</h1>
//       <h2>My list of art to see:</h2>
//       <ItemList
//         artworks={list}
//         onToggle={handleToggle} />
//     </>
//   );
// }

// function ItemList({ artworks, onToggle }) {
//   return (
//     <ul>
//       {artworks.map(artwork => (
//         <li key={artwork.id}>
//           <label>
//             <input
//               type="checkbox"
//               checked={artwork.seen}
//               onChange={e => {
//                 onToggle(
//                   artwork.id,
//                   e.target.checked
//                 );
//               }}
//             />
//             {artwork.title}
//           </label>
//         </li>
//       ))}
//     </ul>
//   );
// }


//////////////////////// UPDATING OBJECTS IN STATE /////////////////////////////////
// export default function Form() {
//   const [person, setPerson] = useState({
//     name: 'Niki de Saint Phalle',
//     artwork: {
//       title: 'Blue Nana',
//       city: 'Hamburg',
//       image: 'https://i.imgur.com/Sd1AgUOm.jpg',
//     }
//   });

//   function handleNameChange(e) {
//     setPerson({
//       ...person,
//       name: e.target.value
//     });
//   }

//   function handleTitleChange(e) {
//     setPerson({
//       ...person,
//       artwork: {
//         ...person.artwork,
//         title: e.target.value
//       }
//     });
//   }

//   function handleCityChange(e) {
//     setPerson({
//       ...person,
//       artwork: {
//         ...person.artwork,
//         city: e.target.value
//       }
//     });
//   }

//   function handleImageChange(e) {
//     setPerson({
//       ...person,
//       artwork: {
//         ...person.artwork,
//         image: e.target.value
//       }
//     });
//   }

//   return (
//     <>
//       <label>
//         Name:
//         <input
//           value={person.name}
//           onChange={handleNameChange}
//         />
//       </label>
//       <label>
//         Title:
//         <input
//           value={person.artwork.title}
//           onChange={handleTitleChange}
//         />
//       </label>
//       <label>
//         City:
//         <input
//           value={person.artwork.city}
//           onChange={handleCityChange}
//         />
//       </label>
//       <label>
//         Image:
//         <input
//           value={person.artwork.image}
//           onChange={handleImageChange}
//         />
//       </label>
//       <p>
//         <i>{person.artwork.title}</i>
//         {' by '}
//         {person.name}
//         <br />
//         (located in {person.artwork.city})
//       </p>
//       <img
//         src={person.artwork.image}
//         alt={person.artwork.title}
//       />
//     </>
//   );
// }

///////////////////////////////////// INECREMENT /////////////////////////////////////
// export default function Counter() {
//   const [score, setScore] = useState(0);

//   function increment() {
//     setScore(s => s + 1)
//   }

//   return (
//     <>
//       <button onClick={() => increment()}>+1</button>
//       <button onClick={() =>{
//         increment();
//         increment();
//         increment();
//       }}>+3</button>
//       <h1>Score: {score}</h1>
//     </>
//   )
// }



///////////////////////////////// State and Message ///////////////////////////////
// export default function Form() {
//   const [to, setTo] = useState('Alice');
//   const [message, setMessage] = useState('Hello');

//   function handleSubmit(e) {
//     e.preventDefault();
//     setTimeout(() => {
//       alert(`You said ${message} to ${to}`);
//     }, 5000);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         To:{' '}
//         <select
//           value={to}
//           onChange={e => setTo(e.target.value)}>
//           <option value="Alice">Alice</option>
//           <option value="Bob">Bob</option>
//         </select>
//       </label>
//       <textarea
//         placeholder="Message"
//         value={message}
//         onChange={e => setMessage(e.target.value)}
//       />
//       <button type="submit">Send</button>
//     </form>
//   );
// }



/////////////////////////////   SCULPTURE LIST  ///////////////////////////////
// export default function Gallery() {
//   const [index, setIndex] = useState(0);
//   const [showMore, setShowMore] = useState(false);
//   const hasNext = index < sculptureList.length - 1;

//   function handleNextClick() {
//     if (hasNext) {
//       setIndex(index + 1);
//     } else {
//       setIndex(0);
//     }
//   }

//   function handleMoreClick() {
//     setShowMore(!showMore);
//   }

//   let sculpture = sculptureList[index];
//   return (
//     <>
//       <button onClick={handleNextClick}>
//         Next
//       </button>
//       <h2>
//         <i>{sculpture.name} </i>
//         by {sculpture.artist}
//       </h2>
//       <h3>
//         ({index + 1} of {sculptureList.length})
//       </h3>
//       <button onClick={handleMoreClick}>
//         {showMore ? 'Hide' : 'Show'} details
//       </button>
//       {showMore && <p>{sculpture.description}</p>}
//       <img
//         src={sculpture.url}
//         alt={sculpture.alt}
//       />
//     </>
//   );
// }



/////////////////////////////   SIMPLE TOOL BAR  ///////////////////////////////
// export default function App() {
//   return (
//    <Toolbar 
//     onPlayMovie={() => alert('Playing!')}
//     onUploadImage={() => alert('Uploading!')}
//     />
//   );
// }

// function Toolbar({onPlayMovie, onUploadImage}){
//   return(
//     <div>
//       <Button onClick={onPlayMovie}>
//         Play Movie
//       </Button>
//       <Button onClick={onUploadImage}>
//         Upload Image
//       </Button>
//     </div>
//   );
// }

// function Button({onClick, children}){
//   return(
//     <button onClick={onClick}>
//       {children}
//     </button>
//   );
// }

//export default App;
