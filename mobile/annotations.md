## Conceitos importantes acerca do React Native

-> A estrutura não é mais feita em JSX como no React Web, e sim totalmente com componentes.

-> **Componets Nativos:** Existe alguns componentes que vem por padrão no RN, como a <View/> (como se fosse uma div), o <Text/>, eles são fundamentais no desenvolvimento e funcionam como containers para renderizar dados na tela;

- Não existe semantica dentro do RN, ou seja, não a diferenciação no significado das tags components, como existe no HTML por exemplo;

## Estilização
-> Os componentes recebem estilização via tag style={}. Os estilos são passados como objetos e existe um comp StyleSheet que recebe um metodo .create;
-> Não existe herança de estilos, cada componente recebe um estilo próprio;

## Configuração das Rotas da Aplicação
- As rotas serão criadas utilizando o react navigator, com ele podemos implementar diversas formas de navegasção como por abas, menus, e o mais padrão por botões (via React navigator *Snack*);