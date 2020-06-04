import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('should render an expense list item', () => {
    const wrapper = shallow(<ExpenseListItem id={expenses[0].id} 
                                            description={expenses[0].description} 
                                            amount={expenses[0].amount}
                                            note={expenses[0].note}
                                            createdAt={expenses[0].createdAt} />);
    expect(wrapper).toMatchSnapshot();
});