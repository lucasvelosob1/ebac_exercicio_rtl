import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PostComments from './index';

describe('PostComments', () => {
  it('permite inserir dois comentários', () => {
    render(<PostComments />);

    const input = screen.getByTestId('comment-input');
    const button = screen.getByTestId('comment-submit');

    fireEvent.change(input, { target: { value: 'Primeiro comentário' } });
    fireEvent.click(button);

    fireEvent.change(input, { target: { value: 'Segundo comentário' } });
    fireEvent.click(button);

    expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();
    expect(screen.getByText('Segundo comentário')).toBeInTheDocument();

    const commentItems = screen.getAllByTestId('comment-item');
    expect(commentItems.length).toBe(2);
  });
});