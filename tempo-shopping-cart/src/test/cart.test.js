// import Cart from '../components/Cart';
// import React from 'react';
const Cart = require('../components/Cart')
// const spy = jest.spyOn(props, 'fetchRemoveItem');
// let handleRemove = () => fetchRemoveItem();

 describe('test handleRemove', function() {
     it('should call fetchRemoveItem function', function() {
        //  let id = 1;
        handleRemove();
        expect(spy).toHaveBeenCalled();
     });
    it('renders without crashing', () => {
        expect(JSON.stringify(Cart)).toMatchSnapshot();
      });
 })