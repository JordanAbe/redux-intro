import store from './redux/store';

const itemListDOM = $('#itemList');
const itemDOM = $('#item');
const inputNuevaNotaDOM = $('#txtNuevaNota');

inputNuevaNotaDOM.keyup((e)=>{
    console.log('keyup')
    if(e.keyCode === 13) {
        console.log('enter')
        store.dispatch({
            type: 'AGREGAR',
            payload: {
                text: inputNuevaNotaDOM.val()
            }
        })
        inputNuevaNotaDOM.val('');
    }
})

function actualizarLista(items) {
    itemListDOM.html('');
    for(const item of items){
        const itemClone = itemDOM.clone();
        const chkHabilitadoDOM = itemClone.find('input');
        const lblText = itemClone.find('span');
        const btnEliminar = itemClone.find('button');

        itemClone.removeClass('d-none');
        chkHabilitadoDOM.prop('checked', item.completado);
        lblText.html(item.text);
        if(item.completado){
            lblText.css('text-decoration', 'line-through');
        }
        btnEliminar.on('click', ()=>{
            store.dispatch({
                type: 'BORRAR',
                payload: {
                    id: item.id
                }
            })
        });
        chkHabilitadoDOM.on('click', ()=> {
            store.dispatch({
                type: 'ALTERNAR',
                payload: {
                    id: item.id
                }
            })
        })
        itemListDOM.append(itemClone);
    }
}

store.subscribe(()=> {
    const state = store.getState();
    actualizarLista(state);
});