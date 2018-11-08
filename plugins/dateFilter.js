'use strict'

import Vue from 'vue'

Vue.filter('DayNum', value => {
  if (!value) return ''
  return value.getDate()
})

Vue.filter('DayName', value => {
  if (!value) return ''
  const names = ['LUN', 'MAR', 'MIE', 'JUE', 'VIE', 'SAB', 'DOM']
  return names[value.getDay() - 1]
})
