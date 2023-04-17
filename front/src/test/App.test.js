import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Title', () => {
    render(<App />);
    const linkElement = screen.getByText(/Eco Emissions Sim/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders apply button', () => {
    render(<App />);
    const linkElement = screen.getByText(/Apply/i);
    expect(linkElement).toBeInTheDocument();
})