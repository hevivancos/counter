//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';

import PropTypes from "prop-types";  // cuando importamos en el componente simpre mayuscula P y T ojo en el front  en minúscula.

const  Counter = (props)=> {

        return(

            <div>
                 <div className="container">

                    <div className='icon'>
                    
                    <i className="fa-solid fa-clock-nine"></i>   

                    </div>
                    
                    <div className='1'>
                        
                    </div>

                    <div className='2'>
                        
                    </div>

                    <div className='3'>
                        
                    </div>

                    <div className='4'>
                        
                    </div>

                    <div className='5'>
                        
                    </div>

                    
                    <div className='6'>
                        
                        </div>


               

                 </div>


            </div>

        )
}
// ojo este siempre se escribe en minúscula y luego mayuscuala
Counter.propTypes = {
               
    
/// cuando yo pase el protypes uni1 es un número en este caso.
            uni1: PropTypes.number, 
            uni2: PropTypes.number, 
            uni3: PropTypes.number, 
            uni4: PropTypes.number, 
            uni5: PropTypes.number, 
            uni6: PropTypes.number, 
             
                      
}  





// establecemos una variable que es contador la cual es 0 y uego por cada status incrementando según la variable Status que en este caso va incrementando

let Contadaor = 0;

setInterval(function time(){
    
    let status1 = Math.floor(Contadaor / 1 );
    let status2 = Math.floor(Contador / 10);
    let status3  = Math.floor(Contador / 100);
    let status4 = Math.floor(Contador / 1000);
    let status5 = Math.floor(Contador / 10000);
    let status6 = Math.floor(Contador / 100000);

    Contador ++ 

}, 


    
    
    1000);

export default Counter;