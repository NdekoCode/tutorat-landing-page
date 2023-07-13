import { ScrollHideDirective } from './scroll-hide.directive'

describe('ScrollHideDirective', () => {
  it('should create an instance', () => {
    const directive = new ScrollHideDirective()
    expect(directive).toBeTruthy()
  })
  it('test_scroll_hide_false', () => {
    const directive = new ScrollHideDirective()
    directive.onScroll()
    expect(directive.scrolHide).toBe(false)
  })
  it('test_scroll_hide_true', () => {
    const directive = new ScrollHideDirective()
    window.scrollY = 50
    directive.onScroll()
    expect(directive.scrolHide).toBe(true)
  })
  // Tests that onScroll method toggles scrolHide value
  it('test_scroll_hide_toggle', () => {
    const directive = new ScrollHideDirective()
    window.scrollY = 50
    directive.onScroll()
    expect(directive.scrolHide).toBe(true)
    window.scrollY = 49
    directive.onScroll()
    expect(directive.scrolHide).toBe(false)
  })
  // Tests that onScroll method sets scrolHide to true when window.scrollY is greater than or equal to 50
  it('test_scroll_hide_set_true', () => {
    const directive = new ScrollHideDirective()
    window.scrollY = 50
    directive.onScroll()
    expect(directive.scrolHide).toBe(true)
  })
  // Tests that onScroll method sets scrolHide to false when window.scrollY is less than 50
  it('test_scroll_hide_set_false', () => {
    const directive = new ScrollHideDirective()
    window.scrollY = 49
    directive.onScroll()
    expect(directive.scrolHide).toBe(false)
  })
})
