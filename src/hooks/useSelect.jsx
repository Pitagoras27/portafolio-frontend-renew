

// import { makeStyles } from "@mui/styles";
// import { useState } from "react";

// const useStyles = makeStyles({
//   Label: {
//     display: 'block',
//     fontFamily: 'Lato, sans-serif',
//     fontSize: '24px',
//     fontWeight: '700',
//     margin: '15px 0',
//     color: 'black'
//   },
//   Selector: {
//     width: '100%',
//     fontSize: '18px',
//     borderRadius: '10px'
//   }
// });


// export const useSelect = (label, options = []) => {
//   const classes = useStyles();
//   const [optionSelected, setOptionSelected] = useState('');

//   const SelectCategories = () =>
//     <>
//       <label className={classes.Label}>{label}</label>
//       <select
//         id="category-select"
//         className={classes.Select}
//         onChange={e => setOptionSelected(e.target.value)}
//         value={optionSelected}
//         label="Category"
//       >
//         <option value="select">Select...</option>
//         {
//           options.map(categorie => (
//             <option
//               key={categorie.id}
//               value={categorie.id}>
//                 {categorie.type}
//             </option>
//           ))
//         }
//       </select>
//     </>

//   return [ optionSelected, SelectCategories ]
// }
