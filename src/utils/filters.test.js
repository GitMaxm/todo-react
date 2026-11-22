import { describe, expect, it } from 'vitest';
import { filterStatus, search } from './filters';

const items = [
  { id: 1, title: 'Выпить кофе', important: false, done: false },
  { id: 2, title: 'Купить молоко', important: true, done: true },
  { id: 3, title: 'Позвонить маме', important: true, done: false },
];

describe('search', () => {
  it('возвращает все элементы при пустом запросе', () => {
    expect(search(items, '')).toEqual(items);
    expect(search(items, '   ')).toEqual(items);
  });

  it('ищет без учёта регистра', () => {
    expect(search(items, 'КОФЕ')).toHaveLength(1);
    expect(search(items, 'кофе')[0].id).toBe(1);
  });

  it('обрезает пробелы по краям запроса', () => {
    expect(search(items, '  молоко  ')).toHaveLength(1);
  });

  it('возвращает пустой массив, если ничего не найдено', () => {
    expect(search(items, 'лестница')).toEqual([]);
  });
});

describe('filterStatus', () => {
  it('active возвращает только невыполненные', () => {
    expect(filterStatus(items, 'active').every((item) => !item.done)).toBe(true);
    expect(filterStatus(items, 'active')).toHaveLength(2);
  });

  it('important возвращает только важные', () => {
    expect(filterStatus(items, 'important').every((item) => item.important)).toBe(true);
    expect(filterStatus(items, 'important')).toHaveLength(2);
  });

  it('done возвращает только выполненные', () => {
    expect(filterStatus(items, 'done').every((item) => item.done)).toBe(true);
    expect(filterStatus(items, 'done')).toHaveLength(1);
  });

  it('неизвестный статус возвращает все элементы', () => {
    expect(filterStatus(items, 'all')).toEqual(items);
    expect(filterStatus(items, '')).toEqual(items);
  });
});
