export const availabilityEnum = Object.freeze({
  STARTER: 'Starter',
  UNLOCKABLE: 'Unlockable',
  CUSTOM: 'Custom',
  DOWNLOADABLE: 'Downloadable'
})

export const colorsAvailabilityEnum = Object.freeze({
  [ availabilityEnum.STARTER ]: 'success',
  [ availabilityEnum.UNLOCKABLE ]: 'secondary',
  [ availabilityEnum.CUSTOM ]: 'primary',
  [ availabilityEnum.DOWNLOADABLE ]: 'warning'
})