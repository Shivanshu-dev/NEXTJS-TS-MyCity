import React from 'react'
import styled from 'styled-components';


const QtyToggler = () => {
  return (
    <TogglerContainer>
        <Button> + </Button>
        <QTY>
        0
        </QTY>
        <Button> - </Button>
    </TogglerContainer>
  )
}

export default QtyToggler;


const TogglerContainer = styled.div({
    width:'80px',
    display:'flex',
    height:'42px',
    border:'1px solid #e8e8e8',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:'8px'
})

const Button = styled.div({
    width:'33%',
    height:'40px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRight:'1px solid #e8e8e8',
    borderLeft:'1px solid #e8e8e8'
})

const QTY = styled.div({
    width:'33%',
    height:'auto',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
})