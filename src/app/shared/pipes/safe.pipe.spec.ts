import { DomSanitizer } from '@angular/platform-browser'
import { SafePipe } from './safe.pipe'

describe('SafePipe', () => {
  it('create an instance', () => {
    const sanitizerMock: DomSanitizer = {
      sanitize: () => '',
      bypassSecurityTrustHtml: () => '',
      bypassSecurityTrustStyle: () => '',
      bypassSecurityTrustScript: () => '',
      bypassSecurityTrustUrl: (url: string) => url,
      bypassSecurityTrustResourceUrl: (url: string) => url
    }
    const pipe = new SafePipe(sanitizerMock)
    expect(pipe).toBeTruthy()
  })

  // Tests that a valid URL string is transformed into a sanitized URL
  it('test_valid_url', () => {
    const sanitizerMock: DomSanitizer = {
      sanitize: () => '',
      bypassSecurityTrustHtml: () => '',
      bypassSecurityTrustStyle: () => '',
      bypassSecurityTrustScript: () => '',
      bypassSecurityTrustUrl: (url: string) => url,
      bypassSecurityTrustResourceUrl: (url: string) => url
    }
    const pipe = new SafePipe(sanitizerMock)
    const url = 'https://www.example.com'
    const result = pipe.transform(url)
    expect(result).toEqual('https://www.example.com')
  })
  // Tests that an empty string is transformed into an empty sanitized URL
  it('test_empty_string', () => {
    const sanitizerMock: DomSanitizer = {
      sanitize: () => '',
      bypassSecurityTrustHtml: () => '',
      bypassSecurityTrustStyle: () => '',
      bypassSecurityTrustScript: () => '',
      bypassSecurityTrustUrl: (url: string) => url,
      bypassSecurityTrustResourceUrl: (url: string) => url
    }
    const pipe = new SafePipe(sanitizerMock)
    const url = ''
    const result = pipe.transform(url)
    expect(result).toEqual('')
  })
})
