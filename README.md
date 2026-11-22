# ToDo приложение

Одностраничное приложение списка дел на React: добавление задач, отметки важности и выполнения, удаление, поиск по названию и фильтры (все, активные, важные, выполненные).

## Стек

React 19, Vite, Vitest, CSS Modules.

## Запуск

```bash
npm install
npm run dev      # http://localhost:5173
```

Команды: `npm run build` (сборка в `dist/`), `npm run test` (тесты утилит поиска и фильтрации), `npm run preview` (проверка собранной версии).

## Структура

- `src/components/` — Header, Search, StatusBar, ListItem, List, Footer, у каждого свои стили в `*.module.css`
- `src/App.jsx` — состояние задач, счётчики, сборка отфильтрованного списка
- `src/utils/filters.js` — чистые функции поиска и фильтрации, покрыты тестами в `filters.test.js`
- `public/` — favicon и глобальные стили `index.css` подключаются из `src/`
