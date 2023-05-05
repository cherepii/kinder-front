🦄 NEXTJS template

--- 

## 💾Установка

> **Note**
> Перед установкой ознакомьтесь с **версиями шаблона**   
> Для каждой версии есть отдельная ветка в репозитории   
> Например если в проекте необходим *redux toolkit + rtq query*, то версия шаблона находится в ветке **rtq** этого же репозитория.

### HTTPS

#### Если у вас powershell

```Powershell
git clone https://github.com/Neca-development/next-template.git <ИМЯ ПАКЕТА> ; cd <ИМЯ ПАКЕТА> ; git remote remove origin ; npm i
```

#### Если у вас bash

```Bash
git clone https://github.com/Neca-development/next-template.git <ИМЯ ПАКЕТА> && cd <ИМЯ ПАКЕТА> && git remote remove origin && npm i
```
### SSH

#### Если у вас powershell

```Powershell
git clone git@github.com:Neca-development/next-template.git <ИМЯ ПАКЕТА> ; cd <ИМЯ ПАКЕТА> ; git remote remove origin ; npm i
```

#### Если у вас bash

```Bash
git clone git@github.com:Neca-development/next-template.git <ИМЯ ПАКЕТА> && cd <ИМЯ ПАКЕТА> && git remote remove origin && npm i
```

## 📁Structure
- **.vscode**
- **public**
- **src**
  
  - **app**
    - **store**
  
  - **pages** 
  
  - **widgets**
    - **layout**
  
  - **features**
  
  - **entities**
  
  - **blockchain** 
    - **config** 
    - **lib** 
      - **typechain** 
      - **abi** 
    - **model** 
  
  - **shared** 
    - **ui**
    - **lib**
    - **api**
      - **controllers** 
      - **gql** 
    - **styles** 
  

## 📖Tooling

1. [tailwind](https://tailwindcss.com/)
2. [redux-toolkit](https://redux-toolkit.js.org/introduction/getting-started)
3. [react](https://reactjs.org/docs/getting-started.html)
4. [react-router](https://reactrouter.com/docs/en/v6/getting-started/overview)
5. [typescript](https://www.typescriptlang.org/docs/handbook/intro.html)
6. [husky](https://typicode.github.io/husky/#/)
7. [feature-sliced](https://feature-sliced.design/)

## 🆔Naming

### 1. cebab-case, dot notaion
  - слова разделяются дефисом
  - все маленькие буквы
  - **названия файла**`.`**тип файла**`.`**(ts | scss)** и другие... (например file.interface.ts)

### 2. File naming by types
  1. Хоки начинать с приставки `with-` c типом `.hoc.tsx`
  2. Хуки начинать с приставки `use-` c типом `.hook.tsx`
  3. Константы - `.constant.ts`
  4. Services - `.service.ts`
  5. Utils - `.ts`
  6. Slices - `.slice.ts`
  7. Actions - `.actions.ts`
  8. Styles - `.module.scss`
  9. Pages - `index.page.tsx`
  10. Layouts - `.layout.tsx`
  11. RTK query api - `.api.ts`
  12. Models - `.model.ts`
  13. DTO - `.dto.ts`
  14. Enums - `.enum.ts`

### 3. Pages  
  1. Имена папок страниц - `cebab case`
  2. В каждой папке со страницей должен присутстовать файл `index.page.ts` в котором находится сам компонент страницы => *пример* `pages/about/index.page.ts` 


## 📜Conventions 
1. Все импорты между модулями стараемся делать через **alias**, при необходимости можно добавить новые alias в проект
2. Для идентичности проектов `React` и `Next` пришлось выбрать варант наименования страниц где в каждой папке со страницей лежит файл `index.page.ts`

