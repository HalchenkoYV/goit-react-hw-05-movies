import './App.css';
import { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import { Movies } from './Movies/Movies';
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { TrendingMovies } from './TrendingMovies/TrendingMovies';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';



function App (){

  useEffect(() => {
  //  console.log('i fire once');
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<TrendingMovies />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />} >
          <Route path="cast" element={<Cast/>} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
    </>
  );
};





// class App extends Component  {
//   state = {
//     contacts: [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }],
//     filter: ''
//   };

//   // componentDidMount() {
//   //   const savedContacts = localStorage.getItem("contacts");
//   //   const parsedContacts = JSON.parse(savedContacts);

//   //   this.setState({contacts:parsedContacts})
//   // }
  
//   componentDidUpdate() {
//     const { contacts } = this.state;
//     localStorage.setItem("contacts", JSON.stringify(contacts));
//   }

//   addContact = ({name , number}) => {
//     const newContact = {
//       id: shortid.generate(),
//       name,
//       number,
      
//     };
 
//     if (!this.state.contacts.find(contact => contact.name === name)) {
//       this.setState({
//         contacts: [...this.state.contacts, newContact]
//       })
//     }
//     else {
//         alert(`${name} is alredy in your phonebook`)
//     } 
    
//   }

//   handleChangeFilter = (e) => {
//     this.setState({
//       filter : e.target.value
//     })

//   }

//   deleteContact = id => {
//     this.setState(state =>({
//       contacts: state.contacts.filter(contact => contact.id !== id),
//     }));
//   }


//   render() {
//     const { contacts,filter,  } = this.state;
//     const optimizedFilter = filter.toLocaleLowerCase();


//     const visibleContacts = contacts.filter(contact =>
//       contact.name.toLowerCase().includes(optimizedFilter),
//     );


//     return (
//       <Container>
//         <Section title='Phonebook'>
//           <AddContactBox addContact={this.addContact}/>
//         </Section>

//         <Section title='Contacts'>
//           <Contacts listContacts={visibleContacts} toFilter={this.handleChangeFilter} currentFilter={filter} toDelete={this.deleteContact}/>
//         </Section>

//       </Container>
//    )
//   }
// };

export default App;