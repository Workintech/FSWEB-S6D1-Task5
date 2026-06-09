import { beforeEach, expect, test } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Kareler from '../components/Kareler';

let dom;
let document;
beforeEach(() => {
  dom = render(<Kareler />);
  document = dom.container;
});

test('Kareler ekranda doğru şekilde oluşmuş', () => {
  expect(screen.getByTestId(/sqA/)).toBeDefined();
  expect(screen.getByTestId(/sqB/)).toBeDefined();
  expect(screen.getByTestId(/sqC/)).toBeDefined();
  expect(screen.getByTestId(/sqD/)).toBeDefined();
});

test('Sayfa ilk yüklendiğinde seçili bir kare yok', () => {
  expect(document.querySelectorAll('.active')).toHaveLength(0);
});

test("Tıklanan kareye active class'ı ekleniyor.", () => {
  fireEvent.click(screen.getByTestId('sqA'));
  expect(
    document.querySelector('[data-testid=sqA]').classList.contains('active')
  ).toBe(true);
  fireEvent.click(screen.getByTestId('sqB'));
  expect(
    document.querySelector('[data-testid=sqB]').classList.contains('active')
  ).toBe(true);
  fireEvent.click(screen.getByTestId('sqC'));
  expect(
    document.querySelector('[data-testid=sqC]').classList.contains('active')
  ).toBe(true);
  fireEvent.click(screen.getByTestId('sqD'));
  expect(
    document.querySelector('[data-testid=sqD]').classList.contains('active')
  ).toBe(true);
});

test("Bir kareye 2 kere tıklanınca active class'ı eklenip kaldırılıyor", () => {
  fireEvent.click(screen.getByTestId('sqA'));
  expect(
    document.querySelector('[data-testid=sqA]').classList.contains('active')
  ).toBe(true);
  fireEvent.click(screen.getByTestId('sqA'));
  expect(
    document.querySelector('[data-testid=sqA]').classList.contains('active')
  ).toBe(false);
});

test("Bir kareye tıklanınca diğer karalerdeki active class'ı kaldırılıyor", () => {
  fireEvent.click(screen.getByTestId('sqA'));
  expect(document.querySelectorAll('.active')).toHaveLength(1);
  fireEvent.click(screen.getByTestId('sqB'));
  expect(document.querySelectorAll('.active')).toHaveLength(1);
  fireEvent.click(screen.getByTestId('sqC'));
  expect(document.querySelectorAll('.active')).toHaveLength(1);
  fireEvent.click(screen.getByTestId('sqD'));
  expect(document.querySelectorAll('.active')).toHaveLength(1);
});

/*
test('Input alanına girilen metinler #output alanında büyük harfe dönüştürülüyor.', async () => {
  const input = screen.getByTestId('input');
  fireEvent.change(input, { target: { value: 'emre' } });
  expect(await screen.findByText(/EMRE/)).toBeDefined();
});

test('Input alanına girilen metinler 10 karakterden küçükse yazı rengi royalblue oluyor', async () => {
  const input = screen.getByTestId('input');
  fireEvent.change(input, { target: { value: 'emre' } });
  const element = await screen.findByText(/EMRE/);
  expect(getComputedStyle(element).color).toBe('rgb(65, 105, 225)'); //royalblue
});

test('Input alanına girilen metinler 10 karakterden büyükse yazı rengi crimson oluyor', async () => {
  const input = screen.getByTestId('input');
  fireEvent.change(input, { target: { value: 'emre5678901' } });
  const element = await screen.findByText(/EMRE5678901/);
  expect(getComputedStyle(element).color).toBe('rgb(220, 20, 60)'); //crimson
});

test('Reset Butonu input alanının ve #output alanındaki metni sıfırlıyor', async () => {
  const input = screen.getByTestId('input');
  fireEvent.change(input, { target: { value: 'emre5678901' } });
  const element = await screen.findByText(/EMRE5678901/);
  expect(element).toBeDefined();

  const reset = screen.getByText('Reset');
  fireEvent.click(reset);
  const elementfinal = screen.queryByText(/EMRE5678901/);
  expect(elementfinal).toBe(null);
  expect(input.value).toBe('');
});
*/
