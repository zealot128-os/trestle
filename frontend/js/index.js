// Global Dependencies

import '@hotwired/turbo'
import 'bootstrap'

// Core Functionality

import cookie from './core/cookie'
import { i18n, localize } from './core/i18n'

// Stimulus Controllers

import './controllers'

// Deprecated Functionality

import { init, ready, triggerInit, triggerReady } from './deprecated/events'
import './deprecated/tooltip'
import './deprecated/popover'

// Export

const Trestle = {
  cookie,
  i18n,
  localize,

  // Deprecated
  init,
  ready,
  triggerInit,
  triggerReady
}

export default Trestle
