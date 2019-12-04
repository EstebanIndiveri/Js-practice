'use strict'

window.addEventListener('load',()=>{
            let alerta=document.querySelector("#divAlert");
            alerta.addEventListener('mouseover',()=>{
                alert("Pasaste por encima");
                console.log("[moseover] sobre div Alert");
            });
        
            let green = document.querySelector("#divGreen");
            green.addEventListener('mouseover',()=>{
                green.style.color="green";
                console.log("[mouseover] Sobre div Green");
            });
            
            let orange=document.querySelector("#divOrange");
            orange.addEventListener('mouseover',()=>{
                orange.style.color="#FA9600";
                console.log("[mouseover] Sobre div Orange");
            });
            orange.addEventListener('mouseout',()=>{
                orange.style.color="black";
                console.log("[mouseOut] saliste de div Orange")
            });
         
            let border=document.querySelector("#divBorder");
            border.addEventListener('click',()=>{
                border.style.border="4px solid red";
                console.log("[click] ¡bordes rojos!")
            });
            border.addEventListener('dblclick',()=>{
                border.style.border="";
                console.log("[dblClick] bordes negros again");
            });
            
            let foco=document.querySelector("#txtFoco");
                foco.addEventListener('focus',()=>{
                    foco.style.border="4px solid #ACF0F2";
                    console.log("[Focus] dentro del imput");
                });
            foco.addEventListener('blur',()=>{
                foco.style.border="";
                console.log("[blur]saliste del imput");
            });
        
            let botonDisabled=document.querySelector("#btnDisabled");
            let txtchange=document.querySelector("#txtCambio");
            txtchange.addEventListener('input',()=>{
                botonDisabled.disabled=false;
                console.log("[INPUT/CHANGE] cambiaste el input, se habilita el boton guardar");
            });
            
            let teclaEnter=document.querySelector("#txtEnter");
            teclaEnter.addEventListener('keypress',(event)=>{
            if(event.keyCode==13){
            alert("Presionaste la tecla enter");
            console.log("[keypress]pulsaste Enter");
            }});
        
            let alertaClick=document.querySelector(".div");
            let botonAlerta=document.querySelector("#btnAlert");
            botonAlerta.addEventListener('click',(e)=>{
                alert("Boton presionado");
                e.stopImmediatePropagation();
                console.log("[Click] presionaste el boton sin la activar alerta del div");
            });
        
});
        