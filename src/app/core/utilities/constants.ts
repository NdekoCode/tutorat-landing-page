export enum GLOBAL_CONSTANTS {
  ALERT_TIMEOUT = 4500,
  AUTH_TIMEOUT = 5500,
  AUTH_TIMEOUT_LOGIN = 3000
}

export const ALERT_COLORS = Object.freeze({
  error: 'error-color',
  success: 'success-color',
  warning: 'warning-color',
  infos: 'infos-color'
})
export const ALERT_BG_COLORS = Object.freeze({
  error: 'bg-error',
  success: 'bg-success',
  warning: 'bg-warning',
  infos: 'bg-infos'
})

export const ALERT_AUTH = Object.freeze({
  signup: {
    error: {
      alertTitle: 'Votre inscription est revoquer',
      alertMessage: ''
    },
    success: {
      alertTitle: 'Inscription faite avec succés',
      alertMessage: "Un email de verification vous a été envoyer à l'adresse "
    }
  },
  login: {
    error: {
      alertTitle: 'Connexion reussis',
      alertMessage: 'Vous vous etes connecter avec succés, Ravis de vous revoir'
    },
    success: {
      alertTitle: 'Erreur survenus lors de la connexion',
      alertMessage: "Un email de verification vous a été envoyer à l'adresse "
    }
  }
})
