'use strict'

import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      content: [
        {
          grid: {
            title: '"Memorias del agua" Expo',
            cover: 'https://picsum.photos/200'
          },
          content: {
            date: new Date(),
            subtitle: 'La casa amarilla'
          }
        },
        {
          grid: {
            title: 'Taller Crea tu pella de gofio'
          },
          content: {
            date: new Date(),
            subtitle: 'Monumento al campesino'
          }
        },
        {
          grid: {
            title: "All tomorrow's party"
          },
          content: {
            date: new Date(),
            subtitle: 'MIAC'
          }
        }
      ],
      lang: [
        { id: 'ES', text: 'Idioma' },
        { id: 'IT', text: 'Lingua' },
        { id: 'GB', text: 'Language' },
        { id: 'FR', text: 'Langage' },
        { id: 'DE', text: 'Sprache' }
      ],
      listItems: [
        {
          name: 'Ver y hacer',
          isBold: true,
          childContent: [
            {
              title: 'Qué ver',
              items: [
                { name: 'Cueva de los verdes', route: '/' },
                { name: 'Jameos del Agua', route: '/' },
                { name: 'Jardín del Cactus', route: '/' },
                { name: 'La Casa Amarilla', route: '/' },
                { name: 'Mirador del Río', route: '/' },
                { name: 'Monumento al Campesino', route: '/' },
                { name: 'MIAC', route: '/' },
                { name: 'Museo Atlántico', route: '/' },
                { name: 'Montañas de Fuego', route: '/' }
              ]
            },
            {
              title: 'Qué hacer',
              items: [
                { name: 'Bienal de Arte de Lanzarote', route: '/' },
                { name: 'Jameos Music Festival', route: '/' },
                { name: 'Lanzarote Fashion Weekend', route: '/' }
              ]
            },
            {
              title: 'Y además',
              items: [
                { name: 'Gastronomía', route: '/' },
                { name: 'Grandes eventos', route: '/' }
              ]
            }
          ]
        },
        {
          name: 'Página 2',
          isBold: true,
          childContent: [
            {
              title: 'Categoría 1',
              items: [
                { name: 'Item 1', route: '/' },
                { name: 'Item 1', route: '/' },
                { name: 'Item 1', route: '/' },
                { name: 'Item 1', route: '/' },
                { name: 'Item 1', route: '/' }
              ]
            },
            {
              title: 'Categoria 2',
              items: [
                { name: 'Item 1', route: '/' },
                { name: 'Item 1', route: '/' }
              ]
            }
          ]
        },
        {
          name: 'Página 3',
          isBold: true,
          route: '/pagina'
        },
        {
          name: 'Página 4',
          isBold: false
        }
      ]
    })
  })
}

export default createStore
