const a0_0x20adc7 = a0_0x5579
;(function (_0x31446b, _0x27e51e) {
  const _0x21186c = a0_0x5579,
    _0x1b6111 = _0x31446b()
  while (!![]) {
    try {
      const _0x395a64 =
        -parseInt(_0x21186c(0x2d1)) / 0x1 +
        parseInt(_0x21186c(0x2ff)) / 0x2 +
        (-parseInt(_0x21186c(0x2ab)) / 0x3) *
          (-parseInt(_0x21186c(0x19d)) / 0x4) +
        (parseInt(_0x21186c(0x30e)) / 0x5) *
          (parseInt(_0x21186c(0x217)) / 0x6) +
        parseInt(_0x21186c(0x25f)) / 0x7 +
        (-parseInt(_0x21186c(0x1f2)) / 0x8) *
          (-parseInt(_0x21186c(0x25e)) / 0x9) +
        -parseInt(_0x21186c(0x192)) / 0xa
      if (_0x395a64 === _0x27e51e) break
      else _0x1b6111['push'](_0x1b6111['shift']())
    } catch (_0x3ba238) {
      _0x1b6111['push'](_0x1b6111['shift']())
    }
  }
})(a0_0x91db, 0x68179)
const CLIENT_VERSION = a0_0x20adc7(0x1f4),
  CLIENT_PLATFORM = a0_0x20adc7(0x2a2)
import a0_0x12c0e3 from 'util'
import a0_0x37bf6d from 'child_process'
import a0_0x10645d from 'path'
import a0_0x2c3ab5 from 'http'
import a0_0x350211 from 'os'
import { promises as a0_0x584eb0 } from 'dns'
import { promises as a0_0x75518d, createWriteStream } from 'fs'
import a0_0x531a46 from 'url'
function a0_0x5579 (_0x5da83a, _0x2d3507) {
  const _0x91db21 = a0_0x91db()
  return (
    (a0_0x5579 = function (_0x557961, _0x32218e) {
      _0x557961 = _0x557961 - 0x181
      let _0x5072dd = _0x91db21[_0x557961]
      return _0x5072dd
    }),
    a0_0x5579(_0x5da83a, _0x2d3507)
  )
}
import a0_0x194823 from 'readline-sync'
import a0_0x5c800a from 'got'
import a0_0x49f79f from 'find-free-port'
import a0_0x1df06c from 'password-prompt'
import a0_0x295ea1 from 'temp'
import a0_0x27bba9 from 'is-elevated'
import * as a0_0x4bf4a0 from 'commander'
import * as a0_0x1c4c0f from 'syswide-cas'
import * as a0_0x32541e from 'cidr-tools'
import a0_0x4f928e from 'express'
import * as a0_0x5dfe6f from './utils.js'
const __dirname = a0_0x10645d[a0_0x20adc7(0x309)](
    a0_0x531a46['fileURLToPath'](import.meta[a0_0x20adc7(0x1e3)])
  ),
  exec = a0_0x12c0e3[a0_0x20adc7(0x238)](a0_0x37bf6d[a0_0x20adc7(0x2f8)]),
  DEFAULT_CA_FOLDER = a0_0x20adc7(0x2db),
  deviceFolder = a0_0x10645d[a0_0x20adc7(0x1b3)](
    a0_0x350211['homedir'](),
    '.ztedge'
  ),
  TUNNEL_INTERFACE_NAME = a0_0x20adc7(0x2dc),
  runningConfigFile = a0_0x10645d[a0_0x20adc7(0x1b3)](
    a0_0x350211[a0_0x20adc7(0x2c7)](),
    TUNNEL_INTERFACE_NAME + a0_0x20adc7(0x27b)
  ),
  sep = a0_0x20adc7(0x263),
  SHIELD_CA_CERTIFICATES = [
    a0_0x10645d[a0_0x20adc7(0x1b3)](__dirname, a0_0x20adc7(0x2f4))
  ],
  PRODUCT = { ZTEDGE: a0_0x20adc7(0x2dc), CLOUD_NATIVE: a0_0x20adc7(0x2af) },
  CLOUD_NATIVE_HOSTS = {
    dev: 'dev-zteapi.ericomcloud.net',
    qa: 'qa-zteapi.ericomcloud.net',
    staging: 'staging-zteapi.ericomcloud.net',
    cloud: a0_0x20adc7(0x225)
  }
let REDIRECT_URL,
  REDIRECT_PORT,
  shutdownInProgress = 0x0,
  DEFAULT_CLOUD_NATIVE =
    process[a0_0x20adc7(0x19a)][a0_0x20adc7(0x306)] ?? a0_0x20adc7(0x30d)
async function webGet (_0x626848, _0xaa650a, _0x41858d) {
  const _0x20ddac = a0_0x20adc7
  debugLog(_0x41858d, _0x20ddac(0x1a9) + _0x626848 + '\x20----')
  try {
    let _0x513353 = await a0_0x5c800a(_0x626848, {
      throwHttpErrors: !![],
      retry: { limit: 0x0 },
      responseType: 'json',
      https: { rejectUnauthorized: _0xaa650a },
      timeout: { request: 0x1e * 0x3e8 }
    })
    return (
      debugLog(_0x41858d, _0x513353['body']),
      debugLog(_0x41858d, '------------------------'),
      _0x513353[_0x20ddac(0x2fb)]
    )
  } catch (_0x21de63) {
    debugLog(_0x41858d, _0x20ddac(0x1a6) + _0x21de63[_0x20ddac(0x297)]),
      debugLog(_0x41858d, '------------------------')
    throw _0x21de63
  }
}
async function isValidZteTenant (_0x3ff5d5, _0x17a40b) {
  const _0x3c1f53 = a0_0x20adc7
  try {
    let _0x58ab56 =
        _0x3c1f53(0x215) +
        _0x3ff5d5 +
        _0x3c1f53(0x2ae) +
        _0x3ff5d5 +
        '?version=' +
        CLIENT_VERSION +
        _0x3c1f53(0x1e4) +
        CLIENT_PLATFORM,
      _0x1baab2 = await webGet(
        _0x58ab56,
        !_0x17a40b[_0x3c1f53(0x28d)],
        _0x17a40b
      )
    return _0x1baab2
  } catch (_0xccb62a) {
    return null
  }
}
async function isValidCloudNativeTenant (_0x103421, _0x5a360d, _0x57ee09) {
  const _0x4f2a4f = a0_0x20adc7
  let _0x3b4703 = CLOUD_NATIVE_HOSTS[_0x5a360d] ?? _0x5a360d
  try {
    let _0x4e46cd =
        'https://' +
        _0x3b4703 +
        _0x4f2a4f(0x2b3) +
        _0x103421 +
        _0x4f2a4f(0x266) +
        CLIENT_VERSION +
        '&platform=' +
        CLIENT_PLATFORM,
      _0x3a4de6 = await webGet(
        _0x4e46cd,
        !_0x57ee09[_0x4f2a4f(0x28d)],
        _0x57ee09
      )
    return _0x3a4de6
  } catch (_0x101ad7) {
    return null
  }
}
async function adjustTenantName (_0x3dce37, _0x6d6ac1) {
  const _0x42f1a4 = a0_0x20adc7
  let _0x2337d2 = _0x3dce37[_0x42f1a4(0x223)](/(.*)@(.*)/)
  if (_0x2337d2) {
    let _0x24516c = await isValidCloudNativeTenant(
      _0x2337d2[0x1],
      _0x2337d2[0x2],
      _0x6d6ac1
    )
    if (_0x24516c)
      return {
        tenant: _0x2337d2[0x1],
        cloudNative: _0x2337d2[0x2],
        systemInfo: _0x24516c
      }
  } else {
    let _0x33e8fc = await isValidZteTenant(_0x3dce37, _0x6d6ac1)
    if (_0x33e8fc)
      return { tenant: _0x3dce37, cloudNative: null, systemInfo: _0x33e8fc }
    let _0x33b487 = await isValidCloudNativeTenant(
      _0x3dce37,
      DEFAULT_CLOUD_NATIVE,
      _0x6d6ac1
    )
    if (_0x33b487)
      return {
        tenant: _0x3dce37,
        cloudNative: DEFAULT_CLOUD_NATIVE,
        systemInfo: _0x33b487
      }
  }
  throw new ErrorWithoutStacktrace(
    _0x42f1a4(0x231) + _0x3dce37 + _0x42f1a4(0x296)
  )
}
async function getCloudData (_0x5b9ff3, _0x3dc039) {
  const _0x2c8894 = a0_0x20adc7
  let {
      tenant: _0x22e993,
      cloudNative: _0xd1b24,
      systemInfo: _0x5530b1
    } = await adjustTenantName(_0x5b9ff3, _0x3dc039),
    _0x2871e7
  if (_0xd1b24) {
    let _0x2d73ab = CLOUD_NATIVE_HOSTS[_0xd1b24] ?? _0xd1b24
    _0x2871e7 = {
      tenant: _0x22e993,
      getLoginInformationUrl:
        'https://' + _0x2d73ab + _0x2c8894(0x1e7) + _0x22e993,
      authenticatedUrl:
        _0x2c8894(0x215) + _0x2d73ab + _0x2c8894(0x277) + _0x22e993,
      gwName: null,
      newApiTemplate: 'https://' + _0x2d73ab + _0x2c8894(0x20d) + _0x22e993
    }
  } else
    _0x2871e7 = {
      tenant: _0x22e993,
      getLoginInformationUrl: _0x2c8894(0x215) + _0x22e993 + _0x2c8894(0x2b7),
      authenticatedUrl: _0x2c8894(0x215) + _0x22e993 + _0x2c8894(0x1b6),
      gwName: _0x22e993 + _0x2c8894(0x1b8),
      newApiTemplate:
        _0x2c8894(0x215) + _0x22e993 + _0x2c8894(0x310) + _0x22e993
    }
  return { cloudData: _0x2871e7, systemInfo: _0x5530b1 }
}
class ErrorWithoutStacktrace extends Error {
  constructor (_0x39b62e) {
    const _0x5595a6 = a0_0x20adc7
    super(_0x39b62e), (this[_0x5595a6(0x208)] = _0x5595a6(0x1dc))
  }
}
async function callZteApi (_0x49df25, _0x375c8f, _0x2c8cb1, _0x294968) {
  const _0x95c21d = a0_0x20adc7
  let _0x359b6d
  _0x49df25 = _0x2c8cb1[_0x95c21d(0x2e7)]['replace'](
    _0x95c21d(0x267),
    _0x49df25
  )
  try {
    debugLog(_0x294968, _0x95c21d(0x317) + _0x49df25 + _0x95c21d(0x1d4)),
      debugLog(_0x294968, _0x375c8f),
      (_0x359b6d = await a0_0x5c800a[_0x95c21d(0x20a)](_0x49df25, {
        json: _0x375c8f,
        throwHttpErrors: ![],
        retry: { limit: 0x0 },
        responseType: _0x95c21d(0x1df),
        https: { rejectUnauthorized: !_0x2c8cb1[_0x95c21d(0x28d)] },
        timeout: { request: 0x1e * 0x3e8 }
      })),
      debugLog(_0x294968, _0x359b6d[_0x95c21d(0x2fb)]),
      debugLog(_0x294968, _0x95c21d(0x181))
  } catch (_0x3bb17f) {
    debugLog(_0x294968, _0x3bb17f[_0x95c21d(0x297)]),
      debugLog(_0x294968, _0x95c21d(0x181))
    throw new ErrorWithoutStacktrace(
      _0x95c21d(0x1bc) + _0x3bb17f[_0x95c21d(0x297)]
    )
  }
  if (_0x359b6d['statusCode'] !== 0xc8)
    throw new ErrorWithoutStacktrace(
      _0x95c21d(0x1c7) +
        _0x359b6d[_0x95c21d(0x1ca)] +
        ':\x20' +
        _0x359b6d[_0x95c21d(0x2f2)]
    )
  return _0x359b6d[_0x95c21d(0x2fb)]
}
async function readPassword (_0x21554e, _0xddedea = 'hide') {
  const _0xb5a649 = a0_0x20adc7
  if (process[_0xb5a649(0x311)][_0xb5a649(0x233)])
    return await a0_0x1df06c(_0x21554e, { method: _0xddedea })
  else
    throw new ErrorWithoutStacktrace(
      'Password\x20can\x20only\x20be\x20read\x20from\x20a\x20tty'
    )
}
function canonicalizeVersionString (_0x1dc92a, _0x53ba94) {
  const _0x2f25a2 = a0_0x20adc7
  let _0x144e71 = _0x1dc92a['match'](/(\d+)[.](\d+)(?:[.](\d+))?/)
  if (_0x144e71) {
    const [, _0xa9b956, _0x9f54b0, _0x4ed8b7] = _0x144e71
    return (
      _0xa9b956[_0x2f25a2(0x1da)](0x4, '0') +
      _0x9f54b0[_0x2f25a2(0x1da)](0x4, '0') +
      (_0x4ed8b7 ?? '0')['padStart'](0x4, '0')
    )
  } else
    return (
      _0x53ba94 && newError(_0x2f25a2(0x191), _0x2f25a2(0x242) + _0x1dc92a),
      null
    )
}
function versionLTE (_0x459d38, _0x25939c) {
  let _0x34c2fd = canonicalizeVersionString(_0x459d38, !![]),
    _0x487807 = canonicalizeVersionString(_0x25939c, !![])
  return _0x34c2fd <= _0x487807
}
function versionLT (_0x56133e, _0x468da5) {
  let _0x102d89 = canonicalizeVersionString(_0x56133e, !![]),
    _0x34ed2c = canonicalizeVersionString(_0x468da5, !![])
  return _0x102d89 < _0x34ed2c
}
function versionGTE (_0x6ef07d, _0x3b96c1) {
  let _0x17b12e = canonicalizeVersionString(_0x6ef07d, !![]),
    _0x1c1efa = canonicalizeVersionString(_0x3b96c1, !![])
  return _0x17b12e >= _0x1c1efa
}
const PAGE_FRAME = a0_0x20adc7(0x272)
function startHttpListener (_0x2adaf9, _0x5ef911) {
  const _0x241d06 = a0_0x20adc7
  let _0x4abccb = a0_0x2c3ab5['createServer'](function (_0xdbbb73, _0x5d633f) {
    const _0x3ba69a = a0_0x5579
    let _0x2fdc08 = ''
    _0xdbbb73['on']('data', _0x1abcf7 => {
      _0x2fdc08 += _0x1abcf7
    }),
      _0xdbbb73['on'](_0x3ba69a(0x1a7), () => {
        const _0x41b24d = _0x3ba69a
        let _0x21467b = _0x5ef911(_0xdbbb73[_0x41b24d(0x1e3)], _0x2fdc08)
        ;(_0x2fdc08 = ''),
          _0x5d633f[_0x41b24d(0x2ca)](0xc8, {
            'Content-Type': _0x41b24d(0x289)
          })
        let _0x1dcb7f = PAGE_FRAME[_0x41b24d(0x2e4)](
          _0x41b24d(0x312),
          _0x21467b
        )
        _0x5d633f[_0x41b24d(0x1a7)](_0x1dcb7f)
      })
  })
  return _0x4abccb[_0x241d06(0x1eb)](_0x2adaf9), _0x4abccb
}
async function handleBrowser (
  _0x2bad59,
  _0x232422,
  _0x2a9fe4,
  _0x16dcf8,
  _0x4ae142
) {
  const _0x1dfd51 = a0_0x20adc7
  let _0x32d68a
  const _0x3e6253 = new Promise((_0x3c2481, _0x41c651) => {
    let _0x48c10a = startHttpListener(REDIRECT_PORT, (_0x2e1273, _0x49279c) => {
      const _0x37fe47 = a0_0x5579
      return (
        (_0x32d68a = a0_0x531a46[_0x37fe47(0x229)](_0x2e1273, !![])['query']),
        (!_0x32d68a[_0x37fe47(0x1cf)] ||
          !_0x32d68a[_0x37fe47(0x1af)] ||
          !_0x32d68a[_0x37fe47(0x1de)]) &&
          (_0x32d68a = null),
        _0x3c2481(),
        _0x32d68a ? _0x37fe47(0x288) : '<h1>Authentication\x20Failed</h1>'
      )
    })
  })
  let _0x5c6769 = _0x232422 + (_0x1dfd51(0x24b) + REDIRECT_URL)
  if (![] && (await fileExists(_0x1dfd51(0x270))))
    exec(_0x1dfd51(0x2cd) + _0x5c6769 + '\x22')
  else {
    if (Promise[_0x1dfd51(0x2e1)]) {
      let _0x47cce6,
        _0x29d9f3 = 0x3e8
      try {
        _0x47cce6 = await Promise[_0x1dfd51(0x2e1)]([
          execNoThrow('sensible-browser\x20\x22' + _0x5c6769 + '\x22'),
          a0_0x5dfe6f[_0x1dfd51(0x1c5)](_0x29d9f3)
        ])
      } catch (_0x18d115) {
        throw new ErrorWithoutStacktrace(
          _0x1dfd51(0x1ea) + _0x18d115['message']
        )
      }
      if (_0x47cce6 !== _0x29d9f3 && _0x47cce6[_0x1dfd51(0x1af)] !== 0x0) {
        let _0x30729f = _0x47cce6[_0x1dfd51(0x2c3)][_0x1dfd51(0x21d)]()
        _0x30729f && (_0x30729f += '\x0a')
        _0x30729f += _0x47cce6[_0x1dfd51(0x1e8)][_0x1dfd51(0x21d)]()
        throw new ErrorWithoutStacktrace(_0x1dfd51(0x1ea) + _0x30729f)
      }
    } else execNoThrow('sensible-browser\x20\x22' + _0x5c6769 + '\x22')
  }
  await _0x3e6253
  if (!_0x32d68a) throw new ErrorWithoutStacktrace(_0x1dfd51(0x2e3))
  return _0x32d68a
}
async function handleUserPassword (_0x402a3f, _0x434436, _0xf07d6f, _0x2ef070) {
  const _0x3ab4bc = a0_0x20adc7
  let _0x265cf2 = _0x434436 + ('&redirect_uri=' + REDIRECT_URL),
    _0x3ae1fb
  if (!_0x2ef070 && !process[_0x3ab4bc(0x311)][_0x3ab4bc(0x233)])
    throw new ErrorWithoutStacktrace(_0x3ab4bc(0x24a))
  try {
    _0x3ae1fb = await a0_0x5c800a(_0x265cf2, {
      throwHttpErrors: ![],
      retry: { limit: 0x0 },
      https: { rejectUnauthorized: !_0x402a3f[_0x3ab4bc(0x28d)] },
      timeout: { request: 0xf * 0x3e8 }
    })
    if (_0x3ae1fb[_0x3ab4bc(0x1ca)] !== 0xc8)
      throw new ErrorWithoutStacktrace(
        _0x3ab4bc(0x244) +
          _0x3ae1fb[_0x3ab4bc(0x1ca)] +
          ':\x20' +
          _0x3ae1fb[_0x3ab4bc(0x2f2)]
      )
    !_0x2ef070 &&
      (_0x2ef070 = await readPassword(
        'Password\x20for\x20' + _0xf07d6f + ':\x20'
      ))
  } catch (_0xf00410) {
    let _0x30d40e = new URL(_0x434436)
    throw new ErrorWithoutStacktrace(
      _0x3ab4bc(0x264) +
        _0x30d40e[_0x3ab4bc(0x2fa)] +
        ':\x20' +
        _0xf00410['message']
    )
  }
  let _0xac4d42 =
      _0x3ae1fb[_0x3ab4bc(0x2fb)][_0x3ab4bc(0x223)](/action="(.*?)"/),
    _0x517f3d = _0xac4d42[0x1][_0x3ab4bc(0x2e4)](/&amp;/g, '&'),
    _0x57abfe = _0x3ae1fb[_0x3ab4bc(0x201)][_0x3ab4bc(0x1aa)]
      [_0x3ab4bc(0x186)](_0x375045 => {
        const _0x4bf704 = _0x3ab4bc
        let _0x5c68e9 = _0x375045[_0x4bf704(0x223)](/^(.*?)=(.*?);/)
        return _0x5c68e9[0x1] + '=' + _0x5c68e9[0x2]
      })
      [_0x3ab4bc(0x1b3)](';\x20'),
    _0x42e2e0 = await a0_0x5c800a['post'](_0x517f3d, {
      headers: { cookie: _0x57abfe, 'content-type': _0x3ab4bc(0x214) },
      form: { username: _0xf07d6f, password: _0x2ef070 },
      throwHttpErrors: ![],
      retry: { limit: 0x0 },
      followRedirect: ![],
      https: { rejectUnauthorized: !_0x402a3f[_0x3ab4bc(0x28d)] }
    })
  if (_0x42e2e0[_0x3ab4bc(0x1ca)] === 0xc8) {
    let _0x5425f2 = _0x42e2e0['body'][_0x3ab4bc(0x29c)](
      'Invalid\x20username\x20or\x20password'
    )
    if (_0x5425f2) throw new ErrorWithoutStacktrace('Invalid\x20credentials')
  } else {
    if (_0x42e2e0['statusCode'] !== 0x12e)
      throw new ErrorWithoutStacktrace(
        _0x3ab4bc(0x1bd) +
          _0x42e2e0['statusCode'] +
          ':\x20' +
          _0x42e2e0[_0x3ab4bc(0x2f2)]
      )
  }
  if (!_0x42e2e0[_0x3ab4bc(0x201)]['location'])
    throw new ErrorWithoutStacktrace(
      'Did\x20not\x20receive\x20authentication\x20information'
    )
  let _0xf68220 = a0_0x531a46[_0x3ab4bc(0x229)](
    _0x42e2e0[_0x3ab4bc(0x201)]['location'],
    !![]
  )['query']
  if (
    !_0xf68220[_0x3ab4bc(0x1cf)] ||
    !_0xf68220[_0x3ab4bc(0x1af)] ||
    !_0xf68220[_0x3ab4bc(0x1de)]
  )
    throw new ErrorWithoutStacktrace(_0x3ab4bc(0x2e3))
  return _0xf68220
}
async function getOs () {
  const _0x563e46 = a0_0x20adc7
  let _0x1ba83b = a0_0x350211['platform']() + '\x20' + a0_0x350211['release']()
  try {
    let _0x402e2c = await exec(_0x563e46(0x1f7))
    _0x1ba83b = _0x402e2c[_0x563e46(0x2c3)]?.[_0x563e46(0x21d)]() ?? _0x1ba83b
  } catch {}
  return _0x1ba83b
}
async function doUpgrade (_0x4e4ad6, _0x253a08) {
  const _0xd75c59 = a0_0x20adc7
  try {
    console[_0xd75c59(0x222)](_0xd75c59(0x2de))
    let _0x3b7157 = a0_0x295ea1[_0xd75c59(0x183)]({
        suffix: a0_0x10645d[_0xd75c59(0x1ab)](_0x4e4ad6[_0xd75c59(0x1e3)])
      }),
      _0x29f684 = createWriteStream(_0x3b7157),
      _0x1fe220 = a0_0x5c800a[_0xd75c59(0x27a)](_0x4e4ad6['url']),
      _0x23b4db = new Promise(function (_0x3e2762, _0xaedf66) {
        const _0x36cfe8 = _0xd75c59
        _0x1fe220['on'](
          _0x36cfe8(0x1be),
          ({
            transferred: _0x14ebc4,
            total: _0x554bb0,
            percent: _0x481634
          }) => {}
        ),
          _0x1fe220['on'](_0x36cfe8(0x191), _0x59acf9 => _0xaedf66(_0x59acf9)),
          _0x29f684['on'](_0x36cfe8(0x293), () => _0x3e2762()),
          _0x29f684['on'](_0x36cfe8(0x191), _0x3926c1 => _0xaedf66(_0x3926c1)),
          _0x1fe220[_0x36cfe8(0x292)](_0x29f684)
      })
    await _0x23b4db
    let _0xcf410d = _0x4e4ad6['installerCommandLine']
      ? _0x4e4ad6['installerCommandLine']
      : _0xd75c59(0x2b6)
    _0xcf410d = _0xcf410d[_0xd75c59(0x2e4)](_0xd75c59(0x2b9), _0x3b7157)
    if (_0x253a08['service']) {
      let _0x36ef3c = '/tmp/zte-upgrade.log'
      ;(await fileExists(_0x36ef3c)) &&
        (await a0_0x75518d['unlink'](_0x36ef3c)),
        console[_0xd75c59(0x222)](
          'Upgrade\x20log\x20will\x20be\x20in\x20' + _0x36ef3c
        ),
        a0_0x37bf6d['spawnSync']('at', ['now'], {
          input: _0xcf410d + _0xd75c59(0x2f7) + _0x36ef3c
        }),
        process[_0xd75c59(0x2b1)](0x0)
    } else {
      if (process[_0xd75c59(0x19a)][_0xd75c59(0x213)]) {
        let _0x1f0402 =
          _0xcf410d +
          '\x0a' +
          (_0xd75c59(0x2dd) +
            _0x3b7157 +
            '\x20' +
            process[_0xd75c59(0x19a)]['ZTE_UPGRADE_FILE'] +
            '\x0a')
        await a0_0x75518d[_0xd75c59(0x23f)](
          process[_0xd75c59(0x19a)][_0xd75c59(0x213)],
          _0x1f0402,
          _0xd75c59(0x1ce)
        ),
          process[_0xd75c59(0x2b1)](0x0)
      } else
        console[_0xd75c59(0x222)](_0xd75c59(0x2d6) + _0xcf410d),
          process[_0xd75c59(0x2b1)](0x0)
    }
  } catch (_0x1b6fda) {
    console[_0xd75c59(0x191)](_0xd75c59(0x26a) + _0x1b6fda[_0xd75c59(0x297)])
  }
}
let didInform = ![]
async function processUpgrade (_0x28c054, _0x2e3e78) {
  const _0x2ca9c5 = a0_0x20adc7
  debugLog(
    _0x2ca9c5(0x18d) +
      _0x2e3e78?.[_0x2ca9c5(0x1ae)] +
      _0x2ca9c5(0x19f) +
      _0x28c054?.[_0x2ca9c5(0x1fc)]
  )
  if (_0x2e3e78?.[_0x2ca9c5(0x188)] && _0x28c054?.[_0x2ca9c5(0x226)] === !![])
    return
  if ((_0x28c054?.[_0x2ca9c5(0x1fc)] ?? 'none') === _0x2ca9c5(0x271)) return
  else {
    if (
      !_0x2e3e78['service'] &&
      _0x28c054[_0x2ca9c5(0x1fc)] === _0x2ca9c5(0x2ac)
    ) {
      if (didInform && _0x28c054[_0x2ca9c5(0x226)]) return
      didInform = !![]
      let _0x5a7cfa
      if (_0x2e3e78['upgrade']) _0x5a7cfa = !![]
      else {
        console['log'](_0x28c054[_0x2ca9c5(0x297)])
        let _0x3d9ebd = a0_0x194823['question'](_0x2ca9c5(0x31f))
        _0x5a7cfa = _0x3d9ebd === 'y'
      }
      _0x5a7cfa && (await doUpgrade(_0x28c054, _0x2e3e78))
    } else await doUpgrade(_0x28c054, _0x2e3e78)
  }
  !_0x28c054[_0x2ca9c5(0x226)] &&
    (console['log'](
      'Exiting\x20because\x20this\x20software\x20version\x20cannot\x20be\x20used.'
    ),
    process[_0x2ca9c5(0x2b1)](0x1))
}
async function getSystemInfo (_0xaff948, _0x135227) {
  const _0x4727d5 = a0_0x20adc7
  let { cloudData: _0x909969, systemInfo: _0x2c28f5 } = await getCloudData(
    _0xaff948,
    _0x135227
  )
  !_0x2c28f5[_0x4727d5(0x313)] &&
    (_0x2c28f5[_0x4727d5(0x313)] = PRODUCT['ZTEDGE'])
  _0x2c28f5['product'] === PRODUCT['CLOUD_NATIVE'] &&
    (_0x2c28f5[_0x4727d5(0x1e9)] = _0x2c28f5[_0x4727d5(0x1e9)][
      _0x4727d5(0x2e4)
    ](/^.*-/, ''))
  Object[_0x4727d5(0x221)](_0x2c28f5, _0x909969)
  if (_0x2c28f5[_0x4727d5(0x313)] === PRODUCT[_0x4727d5(0x2cc)])
    (_0x2c28f5[_0x4727d5(0x2ed)] = ![]),
      (_0x2c28f5['ignoreCertificateErrors'] =
        _0x135227[_0x4727d5(0x28d)] || ![]),
      (_0x2c28f5[_0x4727d5(0x228)] = !![])
  else {
    if (versionLT(_0x2c28f5[_0x4727d5(0x1e9)], _0x4727d5(0x1db)))
      throw new ErrorWithoutStacktrace(_0x4727d5(0x285))
    ;(_0x2c28f5[_0x4727d5(0x2ed)] = !![]),
      (_0x2c28f5[_0x4727d5(0x28d)] =
        _0x135227[_0x4727d5(0x28d)] ||
        versionLT(_0x2c28f5[_0x4727d5(0x1e9)], _0x4727d5(0x1db))),
      (_0x2c28f5[_0x4727d5(0x228)] = versionGTE(
        _0x2c28f5[_0x4727d5(0x1e9)],
        '3.4.0'
      ))
  }
  ;(_0x2c28f5[_0x4727d5(0x22a)] = null),
    (_0x2c28f5[_0x4727d5(0x243)] = null),
    debugLog(_0x135227, _0x4727d5(0x23a)),
    debugLog(_0x135227, _0x2c28f5)
  let _0x426c7e = _0x2c28f5[_0x4727d5(0x28e)]
  return (
    _0x426c7e &&
      _0x426c7e[_0x4727d5(0x1fc)] !== _0x4727d5(0x271) &&
      (await processUpgrade(_0x426c7e, _0x135227)),
    _0x2c28f5
  )
}
async function generateKeyPair () {
  const _0xf33667 = a0_0x20adc7
  let _0x30c685 = (await exec(_0xf33667(0x210)))['stdout'][_0xf33667(0x21d)]()
  const _0x135d14 = a0_0x37bf6d[_0xf33667(0x203)]('wg', ['pubkey'], {
    input: _0x30c685 + '\x0a'
  })
  if (_0x135d14[_0xf33667(0x1ac)] !== 0x0)
    throw new ErrorWithoutStacktrace(_0xf33667(0x1b2))
  return {
    public: _0x135d14[_0xf33667(0x2c3)][_0xf33667(0x305)]()[_0xf33667(0x21d)](),
    private: _0x30c685
  }
}
async function newApiCreateDevice (
  _0x4c54fd,
  _0x4ace2e,
  _0x5abaae,
  _0x5aea8a,
  _0x50d4d6
) {
  const _0x4fca8d = a0_0x20adc7
  let _0x11c94f = await generateKeyPair(),
    _0x387e7d = {
      platform: CLIENT_PLATFORM,
      operatingSystemInformation: await getOs(),
      clientVersion: CLIENT_VERSION,
      deviceName: _0x4ace2e,
      deviceType: _0x50d4d6['connector'] ? _0x4fca8d(0x205) : 'user',
      devicePublicKey: _0x11c94f[_0x4fca8d(0x2a1)]
    }
  _0x387e7d[_0x4fca8d(0x1a1)] === _0x4fca8d(0x205) &&
    (_0x387e7d[_0x4fca8d(0x26e)] = { name: _0x5abaae, password: _0x5aea8a })
  let _0x51e3c1 = await callZteApi(
    'createDevice',
    _0x387e7d,
    _0x4c54fd,
    _0x50d4d6
  )
  return (
    (_0x51e3c1 = await newApiCompleteAuthentication(
      _0x4c54fd,
      _0x51e3c1,
      _0x5abaae,
      _0x5aea8a,
      _0x50d4d6
    )),
    {
      authenticationInfo: _0x51e3c1,
      keyPair: _0x11c94f,
      deviceType: _0x387e7d[_0x4fca8d(0x1a1)]
    }
  )
}
async function newApiCompleteAuthentication (
  _0x5dad36,
  _0x2483d0,
  _0x568566,
  _0x1874d6,
  _0x3f5688
) {
  const _0x462960 = a0_0x20adc7
  if (_0x2483d0['authenticationType'] === 'webAuthenticate') {
    if (_0x3f5688[_0x462960(0x1ae)] && !_0x1874d6)
      throw new ErrorWithoutStacktrace(
        'Cannot\x20launch\x20ztedge\x20as\x20a\x20service\x20because\x20a\x20password\x20is\x20required'
      )
    ;(REDIRECT_PORT = (await a0_0x49f79f(0xbb8))[0x0]),
      (REDIRECT_URL = _0x462960(0x31a) + REDIRECT_PORT + _0x462960(0x31b))
    let _0x374c38
    _0x3f5688['browser']
      ? (_0x374c38 = await handleBrowser(
          _0x5dad36,
          _0x2483d0['authenticationURL'],
          _0x568566,
          _0x1874d6
        ))
      : (_0x374c38 = await handleUserPassword(
          _0x5dad36,
          _0x2483d0['authenticationURL'],
          _0x568566,
          _0x1874d6
        )),
      (_0x2483d0 = await callZteApi(
        _0x462960(0x255),
        {
          code: _0x374c38['code'],
          state: _0x374c38['state'],
          redirect_uri: REDIRECT_URL
        },
        _0x5dad36,
        _0x3f5688
      ))
  }
  if (_0x2483d0['authenticationType'] !== _0x462960(0x19b))
    throw new ErrorWithoutStacktrace(
      _0x462960(0x279) + JSON['stringify'](_0x2483d0)
    )
  return _0x2483d0
}
async function newApiAuthenticateDevice (
  _0x1b67b9,
  _0x472555,
  _0x2be143,
  _0x1a8385
) {
  const _0x17a21b = a0_0x20adc7
  let _0x120b48 = {
      operatingSystemInformation: await getOs(),
      clientVersion: CLIENT_VERSION,
      devicePublicKey: _0x472555[_0x17a21b(0x2a8)],
      userId: _0x472555[_0x17a21b(0x26b)] ?? ''
    },
    _0x527906 = await callZteApi(
      'AuthenticateDevice',
      _0x120b48,
      _0x1b67b9,
      _0x1a8385
    )
  return (
    (_0x527906 = await newApiCompleteAuthentication(
      _0x1b67b9,
      _0x527906,
      _0x472555[_0x17a21b(0x23d)],
      _0x2be143,
      _0x1a8385
    )),
    _0x527906
  )
}
let lastSuccessfulPing = null,
  tunnelStartTime = null
function startHealthCheckListener (_0x144926) {
  const _0x530c1e = a0_0x20adc7
  let _0x5b900c = _0x144926[_0x530c1e(0x2b2)]
  !_0x5b900c['startsWith']('/') && (_0x5b900c = '/' + _0x5b900c)
  let _0x5b326c = _0x144926['healthCheckPort'],
    _0x519cff = a0_0x4f928e()
  _0x519cff[_0x530c1e(0x1f9)](_0x5b900c, (_0x80d286, _0x5b49b5) => {
    const _0x174992 = _0x530c1e
    try {
      let _0x344cdb = lastSuccessfulPing ?? tunnelStartTime,
        _0xe368b7 = (Date[_0x174992(0x29b)]() - _0x344cdb) / 0x3e8,
        _0x40ec6e = _0xe368b7 > _0x144926[_0x174992(0x1f8)] ? 0x1f7 : 0xc8
      _0x5b49b5[_0x174992(0x1ac)](_0x40ec6e)[_0x174992(0x27c)]('')
    } catch (_0x2982f7) {
      console[_0x174992(0x222)](_0x2982f7),
        _0x5b49b5[_0x174992(0x1ac)](0x1f7)[_0x174992(0x27c)]('')
    }
  })
  let _0x11f65c = a0_0x2c3ab5['createServer'](_0x519cff)
  _0x11f65c['on'](_0x530c1e(0x284), () => {
    const _0x4e87a9 = _0x530c1e
    console[_0x4e87a9(0x222)](
      'Healt\x20check\x20listening\x20on\x20http://localhost:' +
        _0x5b326c +
        _0x5b900c
    )
  }),
    _0x11f65c[_0x530c1e(0x1eb)](_0x5b326c)
}
async function newApiLaunchTunnel (_0x231153, _0x3e94f7, _0x4489d4, _0x267635) {
  const _0x49bba7 = a0_0x20adc7
  if (_0x267635['monitor']) {
    process['on']('SIGTERM', () => initiateShutdown(_0x267635)),
      process['on'](_0x49bba7(0x25a), () => initiateShutdown(_0x267635)),
      (tunnelStartTime = Date[_0x49bba7(0x29b)]())
    _0x267635['healthCheckPort'] && startHealthCheckListener(_0x267635)
    let _0x2c622c
    try {
      _0x2c622c = await doNewApiLaunchTunnel(
        _0x231153,
        _0x3e94f7,
        _0x4489d4,
        _0x267635
      )
    } catch (_0x8d5820) {
      if (!_0x267635['service']) throw _0x8d5820
      _0x267635[_0x49bba7(0x307)]
        ? console[_0x49bba7(0x222)](_0x8d5820)
        : console['log'](_0x8d5820[_0x49bba7(0x297)])
    }
    if (!_0x267635[_0x49bba7(0x1c6)]) {
      console[_0x49bba7(0x222)](_0x49bba7(0x282))
      return
    }
    if (shutdownInProgress) return
    await newApiMonitorTunnel(
      _0x3e94f7,
      _0x4489d4,
      _0x267635,
      _0x2c622c?.[_0x49bba7(0x2aa)],
      _0x2c622c?.[_0x49bba7(0x25d)]
    )
  } else await doNewApiLaunchTunnel(_0x231153, _0x3e94f7, _0x4489d4, _0x267635)
}
async function newApiMonitorTunnel (
  _0xdbe34,
  _0x42b5ff,
  _0x3d30d0,
  _0x4c8d09,
  _0x2d07a2
) {
  const _0x2f31e6 = a0_0x20adc7
  console[_0x2f31e6(0x222)](_0x2f31e6(0x257))
  let _0x27a160 = Date['now'](),
    _0x48eae8 = _0x27a160,
    _0x174f99 = _0x27a160
  process[_0x2f31e6(0x19a)][_0x2f31e6(0x22d)] &&
    console[_0x2f31e6(0x222)]('[\x20short\x20times\x20]')
  let _0x374f41 = Boolean(_0x2d07a2),
    _0x61137f = 0x5
  while (!shutdownInProgress) {
    if (_0x374f41)
      try {
        process['env'][_0x2f31e6(0x22d)] &&
          ((_0x2d07a2[_0x2f31e6(0x259)]['keepAliveFrequencySec'] = 0x5),
          (_0x2d07a2['postureChecks']['postureCheckFrequencySec'] = 0x1e),
          (_0x2d07a2[_0x2f31e6(0x25d)][_0x2f31e6(0x1b7)] = 0xf))
        let _0x32ae55 =
            _0x27a160 + _0x2d07a2[_0x2f31e6(0x259)][_0x2f31e6(0x18e)] * 0x3e8,
          _0xc89951 =
            _0x48eae8 + _0x2d07a2[_0x2f31e6(0x230)][_0x2f31e6(0x246)] * 0x3e8,
          _0x48ffc4 =
            _0x174f99 +
            _0x2d07a2['clientSettings']['getClientSettingsFrequencySec'] *
              0x3e8,
          _0x5a7018 = Date[_0x2f31e6(0x29b)](),
          _0x52f2a3 = Math['max'](
            _0x5a7018 + 0x3e8,
            Math['min'](_0x32ae55, _0xc89951, _0x48ffc4)
          )
        await a0_0x5dfe6f[_0x2f31e6(0x275)](_0x52f2a3)
        if (shutdownInProgress) break
        if (Date['now']() > _0x48ffc4) {
          try {
            _0x2d07a2 = await getGatewayServices(
              _0x2f31e6(0x25d),
              _0x4c8d09,
              _0xdbe34,
              _0x3d30d0
            )
          } catch (_0x3e902f) {
            console['log'](_0x2f31e6(0x2eb) + _0x3e902f[_0x2f31e6(0x297)])
          }
          _0x174f99 = Date[_0x2f31e6(0x29b)]()
        }
        if (shutdownInProgress) break
        if (Date[_0x2f31e6(0x29b)]() > _0x32ae55) {
          let _0x4a22ab = await getGatewayServices(
            _0x2f31e6(0x18b),
            _0x4c8d09,
            _0xdbe34,
            _0x3d30d0
          )
          lastSuccessfulPing = _0x27a160 = Date[_0x2f31e6(0x29b)]()
        }
        if (shutdownInProgress) break
        if (Date[_0x2f31e6(0x29b)]() > _0xc89951) {
          let _0xcbaee2 = { postureCheckResults: { results: [] } },
            _0x2f754e = await postGatewayServices(
              _0x2f31e6(0x2a5),
              _0xcbaee2,
              _0x4c8d09,
              _0xdbe34,
              _0x3d30d0
            )
          _0x48eae8 = Date[_0x2f31e6(0x29b)]()
          if (!_0x2f754e[_0x2f31e6(0x1d5)])
            throw new ErrorWithoutStacktrace(
              'Server\x20told\x20us\x20to\x20shutdown\x20connection:\x20' +
                _0x2f754e[_0x2f31e6(0x2bb)]
            )
        }
      } catch (_0x478578) {
        ;(_0x374f41 = ![]),
          console[_0x2f31e6(0x222)](
            'Error\x20talking\x20to\x20gateway:\x20' + _0x478578['message']
          )
      }
    if (!_0x374f41) {
      process[_0x2f31e6(0x2c3)][_0x2f31e6(0x2bd)](
        _0x2f31e6(0x2c8) + _0x61137f + _0x2f31e6(0x2fc)
      ),
        await a0_0x5dfe6f[_0x2f31e6(0x1c5)](_0x61137f * 0x3e8)
      if (shutdownInProgress) break
      console[_0x2f31e6(0x222)](_0x2f31e6(0x20f))
      try {
        await stopTunnel(_0x3d30d0),
          (_0x3d30d0['upgradeOnlyIfNotUsable'] = !![])
        let _0x5b03ea = await getSystemInfo(_0x42b5ff['tenant'], _0x3d30d0),
          _0x593c85 = await newApiAuthenticateDevice(
            _0x5b03ea,
            _0x42b5ff,
            null,
            _0x3d30d0
          ),
          _0x470d64 = await doNewApiLaunchTunnel(
            _0x593c85[_0x2f31e6(0x29d)],
            _0x5b03ea,
            _0x42b5ff,
            _0x3d30d0
          )
        ;(_0x4c8d09 = _0x470d64[_0x2f31e6(0x2aa)]),
          (_0x2d07a2 = _0x470d64[_0x2f31e6(0x25d)]),
          (lastSuccessfulPing =
            _0x27a160 =
            _0x48eae8 =
            _0x174f99 =
              Date[_0x2f31e6(0x29b)]()),
          (_0x374f41 = !![]),
          (_0x61137f = 0x5),
          console[_0x2f31e6(0x222)](_0x2f31e6(0x20c))
      } catch (_0x53f748) {
        ;(_0x61137f = Math[_0x2f31e6(0x300)](_0x61137f * 0x2, 0x12c)),
          console['log'](_0x2f31e6(0x194) + _0x53f748[_0x2f31e6(0x297)])
      }
    }
  }
}
async function setPacFile (_0x1120d0, _0x1adfdb) {
  const _0x43ce44 = a0_0x20adc7
  let _0xb2cbac = await exec(_0x43ce44(0x1f6) + _0x1120d0),
    _0x4dc512 = (await exec(_0x43ce44(0x18c)))?.[_0x43ce44(0x2c3)]
      ?.[_0x43ce44(0x21d)]()
      [_0x43ce44(0x2e4)](/'/g, '')
  if (_0x4dc512 !== _0x1120d0)
    throw new Error(_0xb2cbac[_0x43ce44(0x1e8)][_0x43ce44(0x21d)]())
  _0xb2cbac = await exec(_0x43ce44(0x1d9) + _0x1adfdb + '\x27')
  let _0x1b99a1 = (await exec(_0x43ce44(0x21e)))?.[_0x43ce44(0x2c3)]
    ?.[_0x43ce44(0x21d)]()
    [_0x43ce44(0x2e4)](/'/g, '')
  if (_0x1b99a1 !== _0x1adfdb)
    throw new Error(_0xb2cbac[_0x43ce44(0x1e8)][_0x43ce44(0x21d)]())
}
async function doNewApiLaunchTunnel (
  _0x391dad,
  _0x2bfeb2,
  _0x41e07d,
  _0x30418b
) {
  const _0x16e858 = a0_0x20adc7
  let _0x192efd = { authenticationToken: _0x391dad },
    _0x13eaf8 = await callZteApi(
      _0x16e858(0x196),
      _0x192efd,
      _0x2bfeb2,
      _0x30418b
    ),
    _0x5bdcd6 = ''
  if (_0x13eaf8[_0x16e858(0x28c)]) {
    let _0x1e225e = await a0_0x584eb0[_0x16e858(0x21f)](
      _0x13eaf8[_0x16e858(0x28c)]
    )
    if (_0x1e225e[_0x16e858(0x239)] === 0x0)
      throw new ErrorWithoutStacktrace(
        'Cannot\x20resolve\x20' + _0x13eaf8[_0x16e858(0x28c)]
      )
    let _0x1749a2 = Math[_0x16e858(0x319)](
      Math[_0x16e858(0x250)]() * _0x1e225e[_0x16e858(0x239)]
    )
    _0x5bdcd6 = _0x1e225e[_0x1749a2]
  }
  _0x192efd = {
    authenticationToken: _0x391dad,
    preferredGatewayIp: _0x5bdcd6,
    postureCheckResults: { results: [] }
  }
  let _0x40906e = await callZteApi(
    _0x16e858(0x207),
    _0x192efd,
    _0x2bfeb2,
    _0x30418b
  )
  if (!_0x40906e[_0x16e858(0x1d5)])
    throw new ErrorWithoutStacktrace(
      'Peer\x20creation\x20failed:\x20' + _0x40906e[_0x16e858(0x2bb)]
    )
  _0x40906e[_0x16e858(0x205)] &&
    (await connectorPreConnectConfigNewApi(_0x40906e, _0x30418b, _0x2bfeb2))
  let _0x510676 = ''
  _0x40906e[_0x16e858(0x2e0)]['dnsServers'] &&
    (_0x510676 =
      _0x16e858(0x247) +
      _0x40906e[_0x16e858(0x2e0)][_0x16e858(0x294)][_0x16e858(0x1b3)](',\x20') +
      '\x0a')
  let _0x4ff21c = null,
    _0x276433 = null
  try {
    ;(_0x4ff21c = (await exec(_0x16e858(0x18c)))?.[_0x16e858(0x2c3)]
      ?.[_0x16e858(0x21d)]()
      [_0x16e858(0x2e4)](/'/g, '')),
      (_0x276433 = (
        await exec(
          'gsettings\x20get\x20org.gnome.system.proxy\x20autoconfig-url'
        )
      )?.[_0x16e858(0x2c3)]
        ?.[_0x16e858(0x21d)]()
        [_0x16e858(0x2e4)](/'/g, '')),
      (_0x276433[_0x16e858(0x223)](
        /10\.201\.201\.201|10\.10\.201\.1|zerotrustedge/i
      ) ||
        (_0x40906e[_0x16e858(0x31c)][_0x16e858(0x2f5)] &&
          _0x40906e[_0x16e858(0x31c)][_0x16e858(0x2f5)] === _0x276433)) &&
        ((_0x4ff21c = _0x16e858(0x271)), (_0x276433 = ''))
  } catch {}
  let _0x2359b9 = _0x40906e['tunnel'][_0x16e858(0x1ad)]
  if (
    (_0x2359b9[_0x16e858(0x239)] === 0x1 &&
      _0x2359b9[0x0] === _0x16e858(0x316)) ||
    (_0x2359b9[_0x16e858(0x239)] === 0x2 &&
      _0x2359b9[0x0] === '0.0.0.0/0' &&
      _0x2359b9[0x1] === _0x16e858(0x269))
  ) {
  } else {
    if (_0x40906e[_0x16e858(0x2e0)][_0x16e858(0x202)]) {
      let _0x328b59 = new URL(_0x40906e['gatewayServicesUrl']),
        _0x539e09 = _0x328b59[_0x16e858(0x2fa)]
      !a0_0x32541e['contains'](_0x2359b9, _0x539e09) &&
        _0x2359b9[_0x16e858(0x258)](_0x539e09 + _0x16e858(0x2ce))
      let _0x3bf442 = _0x40906e[_0x16e858(0x2e0)]['serverEndpoint'][
        _0x16e858(0x2e4)
      ](/:.*/, '')
      a0_0x32541e[_0x16e858(0x251)](_0x2359b9, _0x3bf442) &&
        (_0x2359b9 = a0_0x5dfe6f[_0x16e858(0x318)]([
          '!' + _0x3bf442 + _0x16e858(0x2ce),
          ..._0x2359b9
        ]))
    }
  }
  let _0x3b8d89 = {
      gatewayServicesUrl: _0x40906e[_0x16e858(0x216)],
      defaultInterface: _0x40906e[_0x16e858(0x23c)],
      userName: _0x41e07d[_0x16e858(0x23d)],
      tenant: _0x41e07d[_0x16e858(0x1cc)],
      setPacFile: Boolean(_0x40906e[_0x16e858(0x31c)][_0x16e858(0x2f5)]),
      connector: Boolean(_0x40906e[_0x16e858(0x205)]),
      monitorPid: _0x30418b['monitor'] ? process[_0x16e858(0x28a)] : null
    },
    _0x27272f = { oldMode: _0x4ff21c, oldProxyPac: _0x276433 },
    _0x3115f0 = ''
  _0x30418b[_0x16e858(0x185)] &&
    (_0x3115f0 = 'ListenPort\x20=\x20' + _0x30418b[_0x16e858(0x185)] + '\x0a')
  let _0xf0b5d =
    _0x16e858(0x1a3) +
    (_0x16e858(0x1a8) + _0x41e07d[_0x16e858(0x25c)] + '\x0a') +
    (_0x16e858(0x1a5) +
      _0x40906e[_0x16e858(0x2e0)][_0x16e858(0x234)] +
      '\x0a') +
    _0x3115f0 +
    _0x510676 +
    '[Peer]\x0a' +
    (_0x16e858(0x295) +
      _0x40906e[_0x16e858(0x2e0)][_0x16e858(0x198)] +
      '\x0a') +
    (_0x16e858(0x2c1) + _0x40906e['tunnel'][_0x16e858(0x193)] + '\x0a') +
    _0x16e858(0x290) +
    (_0x16e858(0x22f) + _0x2359b9[_0x16e858(0x1b3)](',\x20') + '\x0a') +
    ('#\x20systemInfo\x20=\x20' + JSON[_0x16e858(0x2a3)](_0x2bfeb2) + '\x0a') +
    ('#\x20deviceInfo\x20=\x20' + JSON[_0x16e858(0x2a3)](_0x3b8d89) + '\x0a') +
    (_0x16e858(0x2a0) + JSON['stringify'](_0x27272f) + '\x0a')
  await a0_0x75518d[_0x16e858(0x23f)](runningConfigFile, _0xf0b5d, {
    encoding: _0x16e858(0x1ce),
    mode: parseInt('0600', 0x8)
  })
  if (!_0x30418b[_0x16e858(0x1c6)]) return
  let _0x185230 = await execNoThrow(_0x16e858(0x236) + runningConfigFile)
  if (_0x185230[_0x16e858(0x1af)] !== 0x0 || !tunnelActive()) {
    if (
      _0x185230[_0x16e858(0x1e8)][_0x16e858(0x29c)](
        'resolvconf:\x20command\x20not\x20found'
      )
    )
      throw new ErrorWithoutStacktrace(_0x16e858(0x235))
    else
      throw new ErrorWithoutStacktrace(
        'Tunnel\x20did\x20not\x20start:\x0a' +
          _0x185230[_0x16e858(0x1e8)]['trim']()
      )
  } else {
    verboseLog(_0x30418b, _0x16e858(0x23e)), verboseLog(_0x30418b, _0x185230)
    if (_0x40906e[_0x16e858(0x31c)][_0x16e858(0x2f5)])
      try {
        await setPacFile('auto', _0x40906e[_0x16e858(0x31c)]['pacFile']),
          console[_0x16e858(0x222)](
            _0x16e858(0x2bc) + _0x40906e[_0x16e858(0x31c)][_0x16e858(0x2f5)]
          )
      } catch (_0x1e5472) {
        console[_0x16e858(0x222)](
          'Unable\x20to\x20set\x20PAC\x20file:\x20' +
            _0x1e5472[_0x16e858(0x297)]
        )
      }
    console[_0x16e858(0x222)](_0x16e858(0x24e))
    let _0x356833 = _0x40906e['tunnel']['serverPublicKey'][_0x16e858(0x2e4)](
        /[-[\]{}()*+?.,\\^$|#\s]/g,
        '\x5c$&'
      ),
      _0x34bef3 = new RegExp('^' + _0x356833 + _0x16e858(0x283), 'm'),
      _0x2a936a = await a0_0x5dfe6f[_0x16e858(0x2be)](
        async () => {
          const _0x28ed72 = _0x16e858
          if (shutdownInProgress) return ![]
          let _0x9869e5 = await execNoThrow(_0x28ed72(0x1c1)),
            _0x44891f = (_0x9869e5['stdout'] ?? '')[_0x28ed72(0x223)](
              _0x34bef3
            ),
            _0x2411e2 = _0x44891f ? _0x44891f[0x4] : _0x28ed72(0x2d4),
            _0x2ee523 = _0x44891f && _0x44891f[0x4] !== '0'
          return (
            debugLog(
              _0x30418b,
              'Check\x20tunnel\x20handshake\x20=>\x20' +
                _0x2411e2 +
                _0x28ed72(0x1f1) +
                _0x2ee523
            ),
            _0x2ee523
          )
        },
        { timeoutSec: 0x3c, delayMs: 0x3e8 }
      )
    if (shutdownInProgress) return
    if (!_0x2a936a) {
      try {
        await stopTunnel(_0x30418b)
      } catch {}
      throw new ErrorWithoutStacktrace(
        'Tunnel\x20not\x20functioning\x20properly.\x20No\x20handshake.\x20\x20Perhaps\x20a\x20connectivity\x20problem\x20to\x20the\x20POP'
      )
    }
    let _0x5af174 = await a0_0x5dfe6f[_0x16e858(0x2be)](
      async () =>
        shutdownInProgress ||
        (await getGatewayServices(
          _0x16e858(0x25d),
          _0x3b8d89,
          _0x2bfeb2,
          _0x30418b,
          { throwIfError: ![] }
        )),
      { timeoutSec: 0x3c, delayMs: 0x3e8 }
    )
    if (shutdownInProgress) return
    if (!_0x5af174) {
      try {
        await stopTunnel(_0x30418b)
      } catch {}
      throw new ErrorWithoutStacktrace(_0x16e858(0x26d))
    }
    return (
      _0x40906e[_0x16e858(0x205)]
        ? (await connectorPostConnectConfigNewApi(
            _0x40906e,
            _0x30418b,
            _0x2bfeb2
          ),
          console[_0x16e858(0x222)](_0x16e858(0x30a)))
        : console[_0x16e858(0x222)]('Tunnel\x20started'),
      { clientSettings: _0x5af174, deviceInfo: _0x3b8d89 }
    )
  }
}
async function postGatewayServices (
  _0xdda86b,
  _0x55cc3c,
  _0x431756,
  _0x5da21a,
  _0x30c5bc,
  { throwIfError: throwIfError = !![] } = {}
) {
  const _0x7e532d = a0_0x20adc7
  try {
    let _0x155c3f = _0x431756[_0x7e532d(0x216)] + '/' + _0xdda86b
    debugLog(_0x30c5bc, _0x7e532d(0x317) + _0x155c3f + _0x7e532d(0x1d4)),
      debugLog(_0x30c5bc, _0x55cc3c)
    let _0x52b2bb = await a0_0x5c800a[_0x7e532d(0x20a)](_0x155c3f, {
      json: _0x55cc3c,
      throwHttpErrors: !![],
      retry: { limit: 0x0 },
      responseType: 'json',
      timeout: { request: 0x5 * 0x3e8 }
    })
    return (
      debugLog(_0x30c5bc, _0x52b2bb[_0x7e532d(0x2fb)]),
      debugLog(_0x30c5bc, _0x7e532d(0x181)),
      _0x52b2bb[_0x7e532d(0x2fb)]
    )
  } catch (_0x330306) {
    debugLog(_0x30c5bc, _0x7e532d(0x1a6) + _0x330306[_0x7e532d(0x297)]),
      debugLog(_0x30c5bc, _0x7e532d(0x181))
    if (throwIfError)
      throw new ErrorWithoutStacktrace(
        _0xdda86b + '\x20failed:\x20' + _0x330306[_0x7e532d(0x297)]
      )
  }
}
async function getGatewayServices (
  _0x15a225,
  _0xc0847,
  _0x112086,
  _0x33e1f6,
  { throwIfError: throwIfError = !![] } = {}
) {
  const _0x52d34d = a0_0x20adc7
  try {
    let _0x48cfd5 = _0xc0847[_0x52d34d(0x216)] + '/' + _0x15a225
    debugLog(_0x33e1f6, '----\x20GET\x20' + _0x48cfd5 + _0x52d34d(0x1d4))
    let _0x26dac9 = await a0_0x5c800a(_0x48cfd5, {
      throwHttpErrors: !![],
      retry: { limit: 0x0 },
      responseType: _0x52d34d(0x1df),
      timeout: { request: 0x5 * 0x3e8 }
    })
    return (
      debugLog(_0x33e1f6, _0x26dac9[_0x52d34d(0x2fb)]),
      debugLog(_0x33e1f6, '------------------------'),
      _0x26dac9[_0x52d34d(0x2fb)]
    )
  } catch (_0x55d52d) {
    debugLog(_0x33e1f6, 'Error:\x20' + _0x55d52d[_0x52d34d(0x297)]),
      debugLog(_0x33e1f6, _0x52d34d(0x181))
    if (throwIfError)
      throw new ErrorWithoutStacktrace(
        _0x15a225 + _0x52d34d(0x212) + _0x55d52d[_0x52d34d(0x297)]
      )
  }
}
function devNameToFileName (_0x2348f6, _0x5d1ee6, _0xce45b9) {
  const _0x2ba4fd = a0_0x20adc7
  _0x5d1ee6 = _0x5d1ee6['replace'](/[/\\]/g, '')
  let _0x1181bb = a0_0x10645d[_0x2ba4fd(0x1b3)](
    deviceFolder,
    '' + _0x2348f6 + sep + _0x5d1ee6 + sep + _0xce45b9 + '.conf'
  )
  return _0x1181bb
}
async function saveProfile (_0x2e7b8d, _0x13f10e, _0x26a1bd) {
  const _0x3d0354 = a0_0x20adc7
  !(await fileExists(deviceFolder)) &&
    (await a0_0x75518d[_0x3d0354(0x190)](deviceFolder),
    console[_0x3d0354(0x222)](_0x3d0354(0x19c) + deviceFolder))
  let _0x16093c = devNameToFileName(
      _0x2e7b8d,
      _0x13f10e['userName'],
      _0x26a1bd
    ),
    _0x55c864 = {
      version: CLIENT_VERSION,
      privateKey: _0x13f10e['devicePrivateKey'],
      tenant: _0x2e7b8d,
      isConnector: _0x13f10e[_0x3d0354(0x2c5)],
      user: _0x13f10e[_0x3d0354(0x2f1)],
      userId: _0x13f10e[_0x3d0354(0x26b)],
      deviceName: _0x26a1bd
    }
  return (
    await a0_0x75518d[_0x3d0354(0x23f)](
      _0x16093c,
      JSON[_0x3d0354(0x2a3)](_0x55c864, null, 0x2) + '\x0a',
      { encoding: 'utf8', mode: parseInt(_0x3d0354(0x1c4), 0x8) }
    ),
    _0x16093c
  )
}
async function readProfile (_0x3cdd84) {
  const _0x2fc9da = a0_0x20adc7
  let _0x5e7167 = await a0_0x75518d[_0x2fc9da(0x29f)](
      _0x3cdd84,
      _0x2fc9da(0x1ce)
    ),
    _0x330f11 = JSON[_0x2fc9da(0x229)](_0x5e7167)
  return (
    (_0x330f11[_0x2fc9da(0x2a8)] = await getPublicKey(
      _0x330f11[_0x2fc9da(0x25c)]
    )),
    _0x330f11
  )
}
async function getCurrentConnectionInfo () {
  const _0x35618d = a0_0x20adc7
  let _0x51bd36 = await a0_0x75518d[_0x35618d(0x29f)](
      runningConfigFile,
      'utf8'
    ),
    _0x4e99c9 = {
      privateKey: _0x51bd36[_0x35618d(0x223)](/PrivateKey = (.*)/)?.[0x1],
      ip: _0x51bd36[_0x35618d(0x223)](/Address = (.*)/)?.[0x1],
      systemInfo: JSON[_0x35618d(0x229)](
        _0x51bd36[_0x35618d(0x223)](/systemInfo = (.*)/)?.[0x1]
      ),
      deviceInfo: JSON[_0x35618d(0x229)](
        _0x51bd36[_0x35618d(0x223)](/deviceInfo = (.*)/)?.[0x1]
      ),
      restorePac: JSON['parse'](
        _0x51bd36[_0x35618d(0x223)](/restorePac = (.*)/)?.[0x1]
      )
    }
  return (
    (_0x4e99c9[_0x35618d(0x2a8)] = await getPublicKey(_0x4e99c9['privateKey'])),
    _0x4e99c9
  )
}
async function execNoThrow (_0x18bddc) {
  const _0x1fd5b4 = a0_0x20adc7
  try {
    let _0xb9e828 = await exec(_0x18bddc)
    return (_0xb9e828[_0x1fd5b4(0x1af)] = 0x0), _0xb9e828
  } catch (_0x1166ae) {
    return {
      code: _0x1166ae['code'] ?? -0x1,
      stderr: _0x1166ae['stderr'] ?? '',
      stdout: _0x1166ae[_0x1fd5b4(0x2c3)] ?? ''
    }
  }
}
async function fileExists (_0x3023e8) {
  const _0x208a95 = a0_0x20adc7
  try {
    return await a0_0x75518d[_0x208a95(0x2a6)](_0x3023e8), !![]
  } catch {
    return ![]
  }
}
function isString (_0x23e4d3) {
  return typeof _0x23e4d3 === 'string'
}
function doLog (_0x3c972f) {
  const _0x4fe2c9 = a0_0x20adc7
  if (_0x3c972f[_0x4fe2c9(0x2c3)] || _0x3c972f[_0x4fe2c9(0x1e8)]) {
    let _0x590d89 = _0x3c972f[_0x4fe2c9(0x2c3)]?.[_0x4fe2c9(0x21d)]()
    _0x590d89 && console['log'](_0x590d89)
    let _0x5a7518 = _0x3c972f[_0x4fe2c9(0x1e8)]?.[_0x4fe2c9(0x21d)]()
    _0x5a7518 && console[_0x4fe2c9(0x222)](_0x5a7518)
  } else
    isString(_0x3c972f)
      ? console[_0x4fe2c9(0x222)](_0x3c972f)
      : console[_0x4fe2c9(0x222)](JSON[_0x4fe2c9(0x2a3)](_0x3c972f, null, 0x2))
}
function debugLog (_0x319be3, _0x43bd75) {
  const _0x26175f = a0_0x20adc7
  _0x319be3?.[_0x26175f(0x307)] && doLog(_0x43bd75)
}
function verboseLog (_0x120c6b, _0x4ace39) {
  const _0x35045e = a0_0x20adc7
  ;(_0x120c6b?.[_0x35045e(0x1c2)] || _0x120c6b?.[_0x35045e(0x307)]) &&
    doLog(_0x4ace39)
}
async function stopTunnel (_0x5f4689) {
  const _0x21f57a = a0_0x20adc7
  let _0x330946
  if (!tunnelActive()) {
    await execNoThrow(_0x21f57a(0x2da))
    return
  } else {
    if (!(await fileExists(runningConfigFile)))
      console[_0x21f57a(0x222)](_0x21f57a(0x276)),
        await execNoThrow(_0x21f57a(0x2da)),
        (_0x330946 = await execNoThrow(
          _0x21f57a(0x197) + TUNNEL_INTERFACE_NAME
        ))
    else {
      let _0x1fca93 = await getCurrentConnectionInfo()
      if (
        _0x1fca93[_0x21f57a(0x2aa)][_0x21f57a(0x1f0)] &&
        _0x1fca93[_0x21f57a(0x2aa)][_0x21f57a(0x1f0)] !== process['pid']
      ) {
        console[_0x21f57a(0x222)](
          _0x21f57a(0x241) +
            _0x1fca93['deviceInfo'][_0x21f57a(0x1f0)] +
            _0x21f57a(0x21a)
        )
        try {
          process[_0x21f57a(0x1d1)](
            _0x1fca93[_0x21f57a(0x2aa)][_0x21f57a(0x1f0)],
            _0x21f57a(0x1b0)
          )
          return
        } catch (_0x13a3bf) {
          console['log'](_0x21f57a(0x24d))
        }
      }
      try {
        let _0x298d3b = await a0_0x5c800a[_0x21f57a(0x20a)](
          _0x1fca93[_0x21f57a(0x2aa)]['gatewayServicesUrl'] + _0x21f57a(0x28b),
          {
            json: { key: _0x1fca93['publicKey'] },
            throwHttpErrors: ![],
            retry: { limit: 0x0 },
            responseType: 'json',
            timeout: { request: 0x5 * 0x3e8 }
          }
        )
        _0x298d3b[_0x21f57a(0x1ca)] !== 0xc8 &&
          console[_0x21f57a(0x222)](
            _0x21f57a(0x1e6) + _0x298d3b[_0x21f57a(0x2fb)]
          )
      } catch (_0x5b7a4a) {
        console[_0x21f57a(0x222)](
          _0x21f57a(0x1e6) + _0x5b7a4a[_0x21f57a(0x297)]
        )
      }
      ;(_0x330946 = await execNoThrow(_0x21f57a(0x1fb) + runningConfigFile)),
        await a0_0x75518d[_0x21f57a(0x195)](runningConfigFile)
      if (_0x1fca93[_0x21f57a(0x2aa)][_0x21f57a(0x205)]) {
        console[_0x21f57a(0x222)](_0x21f57a(0x1b1))
        let _0x34980b = await execNoThrow(
          _0x21f57a(0x2e8) +
            _0x1fca93['deviceInfo']['defaultInterface'] +
            _0x21f57a(0x252)
        )
      }
      if (_0x1fca93['deviceInfo']['setPacFile'])
        try {
          await setPacFile(
            _0x1fca93[_0x21f57a(0x2cf)][_0x21f57a(0x1cd)],
            _0x1fca93[_0x21f57a(0x2cf)][_0x21f57a(0x21c)]
          )
          if (
            _0x1fca93[_0x21f57a(0x2cf)][_0x21f57a(0x1cd)] === _0x21f57a(0x271)
          )
            console[_0x21f57a(0x222)]('Proxy\x20settings\x20cleared')
          else
            _0x1fca93['restorePac']['oldMode'] === _0x21f57a(0x256)
              ? console['log'](
                  _0x21f57a(0x28f) +
                    _0x1fca93[_0x21f57a(0x2cf)][_0x21f57a(0x21c)]
                )
              : console[_0x21f57a(0x222)](
                  'Proxy\x20mode\x20restored\x20to\x20' +
                    _0x1fca93[_0x21f57a(0x2cf)]['oldMode']
                )
        } catch (_0x325169) {
          console[_0x21f57a(0x222)](_0x21f57a(0x254) + _0x325169['message'])
        }
    }
  }
  if (_0x330946[_0x21f57a(0x1af)] !== 0x0 || tunnelActive())
    throw new ErrorWithoutStacktrace(
      'Tunnel\x20did\x20not\x20shutdown:\x0a' +
        _0x330946[_0x21f57a(0x1e8)][_0x21f57a(0x21d)]()
    )
  else verboseLog(_0x5f4689, _0x330946)
}
async function initiateShutdown (_0x56bb1c) {
  const _0xfdc11a = a0_0x20adc7
  try {
    console[_0xfdc11a(0x222)](), ++shutdownInProgress
    if (shutdownInProgress === 0x2) {
      console['log'](_0xfdc11a(0x200))
      return
    } else
      shutdownInProgress === 0x3 &&
        (console['log'](_0xfdc11a(0x232)), process[_0xfdc11a(0x2b1)](0x1))
    !tunnelActive()
      ? console[_0xfdc11a(0x222)](_0xfdc11a(0x1ed))
      : (console['log'](_0xfdc11a(0x1a2)), await stopTunnel(_0x56bb1c)),
      console[_0xfdc11a(0x222)](_0xfdc11a(0x1c9)),
      process['exit'](0x0)
  } catch (_0x516f8d) {
    console['log'](_0x516f8d),
      console[_0xfdc11a(0x222)](_0xfdc11a(0x1c9)),
      process['exit'](0x0)
  }
}
async function doPing (_0x465bee) {
  const _0x4023bc = a0_0x20adc7
  let _0xf49d55 = ![]
  try {
    let _0x5b1f92 = await a0_0x5c800a(
      _0x465bee['deviceInfo']['gatewayServicesUrl'] + '/clientPing',
      {
        throwHttpErrors: ![],
        retry: { limit: 0x0 },
        responseType: _0x4023bc(0x1df),
        timeout: { request: 0x5 * 0x3e8 }
      }
    )
    _0xf49d55 = _0x5b1f92?.[_0x4023bc(0x1ca)] === 0xc8
  } catch (_0x2fe4dd) {
    console['log'](_0x4023bc(0x23b) + _0x2fe4dd[_0x4023bc(0x297)])
  }
  return _0xf49d55
}
async function connectorPreConnectConfigNewApi (
  _0x168eff,
  _0x99485a,
  _0x4e7232
) {
  const _0x6b25de = a0_0x20adc7
  let _0x2331f4 = await exec(_0x6b25de(0x2f9)),
    _0x2b8182 =
      _0x2331f4[_0x6b25de(0x2c3)][_0x6b25de(0x223)](/ dev (\w+) /)?.[0x1]
  if (!_0x2b8182) throw new Error(_0x6b25de(0x220))
  _0x168eff[_0x6b25de(0x23c)] = _0x2b8182
}
async function connectorPostConnectConfigNewApi (
  _0x2a91ee,
  _0x323398,
  _0x36b117
) {
  const _0x2c3146 = a0_0x20adc7
  console[_0x2c3146(0x222)](
    'Use\x20MASQUERADE\x20to\x20' + _0x2a91ee[_0x2c3146(0x23c)]
  ),
    console['log']('Enable\x20routing')
  try {
    await exec(
      'sudo\x20iptables\x20-A\x20POSTROUTING\x20-t\x20nat\x20-o\x20' +
        _0x2a91ee[_0x2c3146(0x23c)] +
        '\x20-j\x20MASQUERADE'
    ),
      await exec(_0x2c3146(0x218))
  } catch (_0x220d6e) {
    console['log'](_0x2c3146(0x2ad) + _0x220d6e[_0x2c3146(0x297)])
  }
}
function tunnelActive () {
  let _0x52cbc4 = a0_0x350211['networkInterfaces']()
  return Boolean(_0x52cbc4[TUNNEL_INTERFACE_NAME])
}
async function findMatchingProfile (_0x1c6c96, _0x53a235, _0x4cdc18) {
  const _0x14f545 = a0_0x20adc7
  let _0x2230c4
  if (_0x1c6c96 && _0x53a235 && _0x4cdc18) {
    let _0x5750fb = devNameToFileName(_0x1c6c96, _0x53a235, _0x4cdc18)
    if (!(await fileExists(_0x5750fb)))
      throw new ErrorWithoutStacktrace(_0x14f545(0x1e5))
    _0x2230c4 = await readProfile(
      devNameToFileName(_0x1c6c96, _0x53a235, _0x4cdc18)
    )
  } else {
    let _0x5ca1da =
      (await fileExists(deviceFolder)) &&
      (await a0_0x75518d['readdir'](deviceFolder))
    if (!_0x5ca1da)
      throw new ErrorWithoutStacktrace('No\x20matching\x20profiles')
    let _0x326a25
    _0x1c6c96 && !_0x53a235
      ? (_0x326a25 = _0x1c6c96 + sep + '.*' + (_0x4cdc18 ?? '.*'))
      : (_0x326a25 =
          (_0x1c6c96 ?? '.*') +
          sep +
          (_0x53a235 ?? '.*') +
          sep +
          (_0x4cdc18 ?? '.*'))
    let _0x340e00 = _0x5ca1da[_0x14f545(0x2c2)](_0x5d2169 =>
      _0x5d2169[_0x14f545(0x223)](_0x326a25)
    )
    if (_0x340e00[_0x14f545(0x239)] === 0x0)
      throw new ErrorWithoutStacktrace(_0x14f545(0x278))
    else {
      if (_0x340e00['length'] === 0x1) {
        let _0x3877cf = _0x340e00[0x0][_0x14f545(0x223)](
            _0x14f545(0x2e2) + sep + _0x14f545(0x268) + sep + _0x14f545(0x21b)
          ),
          _0x25caeb = a0_0x10645d[_0x14f545(0x1b3)](
            deviceFolder,
            _0x340e00[0x0]
          )
        ;(_0x2230c4 = await readProfile(_0x25caeb)),
          console['log'](
            _0x14f545(0x1f3) +
              _0x2230c4[_0x14f545(0x1cc)] +
              '\x20' +
              _0x2230c4[_0x14f545(0x23d)]
          )
      } else throw new ErrorWithoutStacktrace(_0x14f545(0x22b))
    }
  }
  return _0x2230c4
}
function a0_0x91db () {
  const _0xa6388d = [
    'Being\x20monitored\x20by\x20',
    'dirname',
    'Connector\x20started',
    'device\x20name',
    'Only\x20one\x20such\x20service\x20can\x20be\x20in\x20effect.\x20\x20This\x20will\x20not\x20have\x20access\x20to\x20profiles\x20create\x20w/o\x20sudo.\x0a',
    'cloud',
    '11285LBdGwR',
    '--health-check-path\x20<path>',
    '.zerotrustedge.com:8444/api/v1/ztedge/client/${api}/',
    'stdin',
    '$body$',
    'product',
    'Create\x20and\x20maintain\x20connections\x20to\x20ZTEdge',
    'createService\x20[<cloudId>]\x20[<user>]',
    '0.0.0.0/0',
    '----\x20POST\x20',
    'findSpanningList',
    'floor',
    'http://127.0.0.1:',
    '/auth_resp',
    'proxySettings',
    'command',
    'Authenticated\x20and\x20authorized',
    'Would\x20you\x20like\x20to\x20upgrade\x20now\x20(y/n)\x20?\x20',
    '------------------------',
    'read\x20from\x20the\x20root\x20user\x27s\x20profile\x20folder',
    'path',
    'ExecStart=',
    'listenPort',
    'map',
    'new\x20<cloudId>\x20<user>',
    'upgradeOnlyIfNotUsable',
    '--device-name\x20<name>',
    '/etc/systemd/system/ztedge.service',
    'clientPing',
    'gsettings\x20get\x20org.gnome.system.proxy\x20mode',
    'Process\x20upgrade\x20isService=',
    'keepAliveFrequencySec',
    '--health-check-timeout\x20<sec>',
    'mkdir',
    'error',
    '19507440ShCnVc',
    'serverEndpoint',
    'Reconnect\x20failed:\x20',
    'unlink',
    'GetPreLaunchInfo',
    'sudo\x20ip\x20link\x20delete\x20dev\x20',
    'serverPublicKey',
    'createService',
    'env',
    'authenticated',
    'Created\x20',
    '355884cVQYsu',
    '--reconnectTimeoutSec\x20<num>',
    ';\x20\x20upgradeMode=',
    'readdir',
    'deviceType',
    'Stopping\x20tunnel',
    '[Interface]\x0a',
    '\x20--ignoreCertificateErrors',
    'Address\x20=\x20',
    'Error:\x20',
    'end',
    'PrivateKey\x20=\x20',
    '----\x20GET\x20',
    'set-cookie',
    'extname',
    'status',
    'allowedIPs',
    'service',
    'code',
    'SIGTERM',
    'Shutdown\x20connector\x20routing',
    'cannot\x20generate\x20keypair',
    'join',
    '-b|--background',
    'To\x20be\x20used\x20as\x20a\x20cloud-native\x20connector',
    '.zerotrustedge.com:8444/api/client/authenticated',
    'getClientSettingsFrequencySec',
    '-gateway.zerotrustedge.com',
    'Tunnel\x20is\x20not\x20active',
    'description',
    'username\x20must\x20be\x20specified',
    'Cannot\x20contact\x20tenant.\x20',
    'Did\x20not\x20get\x20expected\x20status.\x20\x20Received\x20',
    'downloadProgress',
    'Will\x20match\x20an\x20existing\x20profile\x20based\x20on\x20the\x20supplied\x20<cloudId>\x20and\x20<user>.\x0a',
    'Running\x20as\x20a\x20service',
    'sudo\x20wg\x20show\x20ztedge\x20dump',
    'verbose',
    '\x20already\x20exists.\x20\x20Use\x20--force\x20to\x20replace\x20it.',
    '0600',
    'sleepMs',
    'launch',
    'Got\x20http\x20response\x20',
    'devicePrivateKey',
    'Exiting\x20ztedge-client',
    'statusCode',
    '-v|--verbose',
    'tenant',
    'oldMode',
    'utf8',
    'state',
    'do\x20not\x20enable\x20and\x20start\x20the\x20service',
    'kill',
    'launchFromToken\x20<cloudId>\x20<user>\x20<token>',
    '*****\x20Using\x20hardwired\x20command\x20line\x20*****',
    '\x20----',
    'connectionAllowed',
    'Profiles\x20are\x20stored\x20in\x20',
    'Create\x20a\x20service\x20named\x20\x22ztedge\x22\x20which\x20will\x20control\x20the\x20specified\x20connection.\x0a',
    'Start\x20a\x20tunnel\x20using\x20an\x20existing\x20profile\x0a',
    'gsettings\x20set\x20org.gnome.system.proxy\x20autoconfig-url\x20\x27',
    'padStart',
    '3.5.0',
    'ErrorWithoutStacktrace',
    'List\x20the\x20currently\x20available\x20profiles\x0a',
    'session_state',
    'json',
    'Do\x20everything\x20except\x20for\x20launching\x20the\x20tunnel',
    '_name',
    '--no-start',
    'url',
    '&platform=',
    'Profile\x20does\x20not\x20exist',
    'Logout\x20failed:\x20',
    '/api/v1/ztedge/client/getlogininformation/',
    'stderr',
    'systemVersion',
    'Error\x20launching\x20external\x20browser:\x20',
    'listen',
    'password',
    'Tunnel\x20is\x20not\x20running\x20...\x20',
    '--service',
    'Import\x20a\x20configuration\x20file\x20generated\x20by\x20the\x20provisioning\x20portal.\x20Authentication\x20is\x20done\x20during\x20import.\x0a',
    'monitorPid',
    '\x20=>\x20',
    '23032YozGqJ',
    'Using\x20profile:\x20',
    '4.0.5',
    'all',
    'gsettings\x20set\x20org.gnome.system.proxy\x20mode\x20',
    'lsb_release\x20-d\x20-s',
    'healthCheckTimeout',
    'get',
    'force',
    'wg-quick\x20down\x20',
    'mode',
    'private',
    'Connected\x20as:\x20',
    'endsWith',
    'Send\x20shutdown\x20again\x20to\x20force\x20immediate\x20shutdown',
    'headers',
    'ipHeuristicsEnabled',
    'spawnSync',
    'version',
    'connector',
    'ztedge-client\x20launchFromToken\x20\x22',
    'createPeer',
    'name',
    'pubkey',
    'post',
    'Show\x20debug\x20output',
    'Reconnect\x20succeeded',
    '/api/v1/ztedge/client/${api}/',
    '-d|--debug',
    'reconnecting\x20...',
    'wg\x20genkey',
    'Show\x20the\x20current\x20tunnel\x20status',
    '\x20failed:\x20',
    'ZTE_UPGRADE_FILE',
    'application/x-www-form-urlencoded',
    'https://',
    'gatewayServicesUrl',
    '1884aDybRz',
    'echo\x201\x20|\x20sudo\x20tee\x20/proc/sys/net/ipv4/ip_forward',
    'authenticationInfo',
    '\x20to\x20shutdown',
    '(.*)[.]conf',
    'oldProxyPac',
    'trim',
    'gsettings\x20get\x20org.gnome.system.proxy\x20autoconfig-url',
    'resolve',
    'cannot\x20determine\x20default\x20device',
    'assign',
    'log',
    'match',
    'Must\x20be\x20run\x20as\x20sudo',
    'zteapi.ericomcloud.net',
    'currentVersionCanConnect',
    'caCertificates',
    'supportsClientPing',
    'parse',
    'getLoginInformationUrl',
    'Multiple\x20profiles\x20match',
    'Warning:\x20',
    'SHORT_TIMES',
    'up\x20[<cloudId>]\x20[<user>]',
    'AllowedIps\x20=\x20',
    'postureChecks',
    'Cannot\x20contact\x20tenant\x20',
    'Aborting\x20ztedge-client',
    'isTTY',
    'assignedIpAddress',
    'Tunnel\x20did\x20not\x20start.\x20\x20Install\x20openresolv\x20with\x20\x27sudo\x20apt\x20install\x20openresolv\x27',
    'wg-quick\x20up\x20',
    '--listen-port\x20<port>',
    'promisify',
    'length',
    '---\x20system\x20info\x20----',
    'Ping\x20failure:\x20',
    'defaultInterface',
    'user',
    'doNewApiLaunchTunnel\x20wg-quick\x20result',
    'writeFile',
    'incoming\x20UDP\x20port',
    'Request\x20PID\x20',
    'cannot\x20parse\x20version\x20',
    'authenticatedUrl',
    'authentication\x20redirect\x20error:\x20',
    'keyPair',
    'postureCheckFrequencySec',
    'DNS\x20=\x20',
    '[Install]\x0a',
    'Run\x20connection\x20in\x20the\x20background',
    'Can\x20only\x20read\x20password\x20from\x20a\x20TTY',
    '&redirect_uri=',
    'argv',
    'Failed\x20to\x20signal.\x20\x20Trying\x20local\x20kill',
    'Waiting\x20for\x20tunnel\x20to\x20come\x20online\x20...\x20',
    'username\x20is\x20required\x20for\x20a\x20pre-3.5\x20server\x20and/or\x20if\x20a\x20password\x20is\x20required\x20to\x20authenticate',
    'random',
    'contains',
    '\x20-j\x20MASQUERADE',
    'parseAsync',
    'Unable\x20to\x20restore\x20system\x20proxy:\x20',
    'authenticationCompleted',
    'auto',
    'Start\x20monitoring',
    'push',
    'keepAlive',
    'SIGINT',
    'Use\x20browser\x20based\x20authentication',
    'privateKey',
    'clientSettings',
    '2187MeJXqz',
    '4372662bltLFW',
    'ZTEdge\x20tunnel\x20is\x20currently\x20active',
    'Unable\x20to\x20start\x20ztedge\x20service:\x20',
    'ignore\x20certificate\x20errors',
    '---',
    'Unable\x20to\x20connect\x20to\x20IAM\x20server\x20',
    'Start\x20a\x20tunnel\x20using\x20an\x20existing\x20profile\x20with\x20authentication\x20token\x0a',
    '?version=',
    '${api}',
    '(.*)',
    '::/0',
    'Upgrade\x20failed:\x20',
    'userId',
    'commands',
    'Tunnel\x20not\x20functioning\x20properly',
    'authentication',
    'import',
    '/opt/google/chrome/chrome',
    'none',
    '<!DOCTYPE\x20html>\x0a<html\x20lang=\x22en\x22>\x0a\x20\x20<head>\x0a\x20\x20\x20\x20<meta\x20charset=\x22utf-8\x22>\x0a\x20\x20\x20\x20<title>ZTEdge</title>\x0a\x20\x20</head>\x0a\x20\x20<body>\x0a\x20\x20\x20\x20$body$\x0a</html>',
    '--no-monitor',
    'Command',
    'sleepTill',
    'The\x20configuration\x20file\x20for\x20the\x20current\x20tunnel\x20has\x20been\x20deleted.\x20\x20Attempting\x20to\x20shutdown\x20anyway\x20...',
    '/api/v1/ztedge/client/authenticated/',
    'No\x20matching\x20profiles',
    'Authentication\x20failed:\x20',
    'stream',
    '.conf',
    'send',
    'launchFromToken',
    'systemctl\x20enable\x20ztedge',
    'health\x20check\x20port\x20(0\x20for\x20none)',
    '--ca-certificates\x20<certs>',
    'new',
    'Tunnel\x20not\x20launched',
    '\x09(.+?)\x09(.+?)\x09(.+?)\x09(.+?)\x09',
    'listening',
    'Requires\x20ztedge\x20server\x20version\x20>=\x203.5',
    '\x20--debug',
    'upgrade\x20if\x20available',
    '<h1>Authentication\x20Succeeded</h1>',
    'text/html;\x20charset=UTF-8',
    'pid',
    '/clientLogout',
    'gatewayDns',
    'ignoreCertificateErrors',
    'upgradeInfo',
    'Proxy\x20restored\x20to\x20',
    'PersistentKeepalive\x20=\x205\x0a',
    '--connector',
    'pipe',
    'finish',
    'dnsServers',
    'PublicKey\x20=\x20',
    '.\x20\x20Perhaps\x20there\x20is\x20a\x20certificate\x20issue.',
    'message',
    'Only\x20used\x20if\x20--browser\x20is\x20not\x20specified.\x20Password\x20for\x20the\x20ZTEdge\x20user.\x0aYou\x20will\x20be\x20prompted\x20if\x20a\x20password\x20is\x20needed\x20and\x20was\x20not\x20specified.',
    'Connected\x20to:\x20',
    'How\x20often\x20to\x20ping\x20the\x20gateway',
    'now',
    'includes',
    'authenticationToken',
    'background',
    'readFile',
    '#\x20restorePac\x20=\x20',
    'public',
    'linux',
    'stringify',
    'health\x20check\x20path',
    'clientData',
    'access',
    'action',
    'publicKey',
    '--pingIntervalSec\x20<num>',
    'deviceInfo',
    '27IQHqYJ',
    'inform',
    'Error\x20configuring\x20connector:\x20',
    '.zerotrustedge.com:8444/api/v1/ztedge/client/SystemVersionAndTenantFeatures/',
    'cloud-native',
    'systemctl\x20start\x20ztedge',
    'exit',
    'healthCheckPath',
    '/api/v1/ztedge/client/SystemVersionAndTenantFeatures/',
    'Use\x20\x22journalctl\x20-u\x20ztedge\x20|\x20tail\x22\x20to\x20see\x20any\x20service\x20messages',
    '\x22\x20\x22',
    'sudo\x20bash\x20\x22{installPackage}\x22',
    '.zerotrustedge.com:8444/api/client/getlogininformation',
    'wireguard/linux-client',
    '{installPackage}',
    'max',
    'userMessage',
    'PAC\x20file\x20set:\x20',
    'write',
    'waitFor',
    'split',
    '[Unit]\x0a',
    'Endpoint\x20=\x20',
    'filter',
    'stdout',
    '\x20--ca-certificates\x20\x22',
    'isConnector',
    'You\x20will\x20be\x20prompted\x20for\x20a\x20\x22sudo\x22\x20password\x20as\x20needed.\x20\x20if\x20you\x20launch\x20with\x20\x22sudo\x20ztedge-client\x22,\x20the\x20profiles\x20will\x20be\x0a',
    'tmpdir',
    'Will\x20try\x20to\x20reconnect\x20in\x20',
    'Service\x20creation\x20error:\x20',
    'writeHead',
    'Waiting\x20for\x20tunnel\x20to\x20start\x20...',
    'CLOUD_NATIVE',
    '/opt/google/chrome/chrome\x20--incognito\x20\x22',
    '/32',
    'restorePac',
    'find',
    '456928IOjfoY',
    'You\x20will\x20be\x20prompted\x20for\x20a\x20\x22sudo\x22\x20password\x20as\x20needed.\x20\x20If\x20you\x20launch\x20with\x20\x22sudo\x20ztedge-client\x22,\x20the\x20profiles\x20will\x20be\x0a',
    'down',
    'no-data',
    '\x20up\x20\x22',
    'Upgrade\x20by\x20running\x20the\x20command:\x20',
    'addCAs',
    'Saved\x20',
    '/tmp/ztedge-client.log',
    'sudo\x20resolvconf\x20-d\x20ztedge',
    '/usr/local/share/ca-certificates',
    'ztedge',
    'rm\x20-f\x20',
    'Downloading\x20update\x20package.',
    'IP:\x20',
    'tunnel',
    'any',
    '^(.*)',
    'Authorization\x20failed\x20(unknown\x20reason)',
    'replace',
    '\x20--device-name\x20',
    '\x20not\x20found.',
    'newApiTemplate',
    'sudo\x20iptables\x20-D\x20POSTROUTING\x20-t\x20nat\x20-o\x20',
    '-f|--force',
    '--health-check-port\x20<port>',
    'Cannot\x20update\x20client\x20settings:\x20',
    'how\x20long\x20the\x20connection\x20should\x20be\x20down\x20(sec)\x20for\x20health\x20check\x20failure',
    'sendGatewayIp',
    'Tunnel\x20is\x20functioning\x20properly',
    'Replace\x20existing\x20profile',
    'deviceName',
    'userName',
    'statusMessage',
    '--browser',
    'ericomshield.crt',
    'pacFile',
    'Only\x20do\x20the\x20authentication/profileManagement\x20and\x20do\x20not\x20launch\x20the\x20tunnel',
    '\x20>\x20',
    'exec',
    'ip\x20route\x20show\x20default',
    'hostname',
    'body',
    '\x20seconds\x20...\x20',
    'Unable\x20to\x20enable\x20ztedge\x20service:\x20',
    'Stop\x20the\x20currently\x20running\x20tunnel\x0a',
    '666zLErhn',
    'min',
    'allowExcessArguments',
    'option',
    'systemctl\x20daemon-reload',
    '-\x20\x20create\x20and\x20start\x20the\x20service\x20with\x20\x22sudo\x20ztedge-client\x20createService\x20...\x22',
    'toString',
    'DEFAULT_CLOUD_NATIVE',
    'debug'
  ]
  a0_0x91db = function () {
    return _0xa6388d
  }
  return a0_0x91db()
}
async function getPublicKey (_0x1d3663) {
  const _0x5c7e35 = a0_0x20adc7,
    _0xce8675 = a0_0x37bf6d[_0x5c7e35(0x203)]('wg', [_0x5c7e35(0x209)], {
      input: _0x1d3663 + '\x0a'
    })
  if (_0xce8675[_0x5c7e35(0x1ac)] !== 0x0)
    throw new ErrorWithoutStacktrace('cannot\x20generate\x20publickey')
  return _0xce8675['stdout'][_0x5c7e35(0x305)]()[_0x5c7e35(0x21d)]()
}
async function setupShieldCertificate (_0x5da901) {
  const _0x42fcc4 = a0_0x20adc7
  _0x5da901[_0x42fcc4(0x227)] &&
    a0_0x1c4c0f[_0x42fcc4(0x2d7)](
      _0x5da901[_0x42fcc4(0x227)][_0x42fcc4(0x2bf)](',')
    )
  for (let _0x3e94af of SHIELD_CA_CERTIFICATES) {
    ;(await fileExists(_0x3e94af))
      ? a0_0x1c4c0f[_0x42fcc4(0x2d7)](_0x3e94af)
      : console[_0x42fcc4(0x222)](
          _0x42fcc4(0x22c) + _0x3e94af + _0x42fcc4(0x2e6)
        )
  }
}
function myParseInt (_0x34ff35, _0x508f6c) {
  return parseInt(_0x34ff35)
}
function myParseString (_0x190097, _0x47c490) {
  return _0x190097
}
function addConnectOptions (_0x20708b, _0xc74d25) {
  const _0x343083 = a0_0x20adc7
  let _0x595592 = _0x20708b[_0x343083(0x26c)][_0x343083(0x2d0)](
    _0x61f5de => _0x61f5de[_0x343083(0x1e1)] === _0xc74d25
  )
  _0x595592['option'](
    '--password\x20<password>',
    'Only\x20used\x20if\x20--browser\x20is\x20not\x20specified.\x20Password\x20for\x20the\x20ZTEdge\x20user.\x0aYou\x20will\x20be\x20prompted\x20if\x20a\x20password\x20was\x20not\x20specified.',
    null
  )
    ['option'](_0x343083(0x2f3), _0x343083(0x25b), ![])
    [_0x343083(0x302)](
      '--authenticateOnly|--authenticate-only',
      _0x343083(0x2f6),
      ![]
    )
    [_0x343083(0x302)]('--no-launch', _0x343083(0x1e0), !![])
    [_0x343083(0x302)](
      _0x343083(0x273),
      'do\x20not\x20monitor\x20the\x20connection.\x20\x20When\x20monitored,\x20exit\x20with\x20SIGTERM\x20or\x20SIGINT\x20or\x20\x22ztedge-client\x20down\x22'
    )
    [_0x343083(0x302)](_0x343083(0x2a9), _0x343083(0x29a), myParseInt, 0xf)
    ['option'](
      _0x343083(0x19e),
      'How\x20long\x20(since\x20the\x20last\x20successful\x20ping\x20to\x20initiate\x20a\x20reconnect)\x20',
      myParseInt,
      0x3c
    )
    ['option']('--upgrade', _0x343083(0x287), ![])
    [_0x343083(0x302)](
      _0x343083(0x189),
      _0x343083(0x30b),
      myParseString,
      a0_0x350211[_0x343083(0x2fa)]()
    )
    [_0x343083(0x302)](_0x343083(0x237), _0x343083(0x240), myParseInt, 0x0)
    [_0x343083(0x302)](_0x343083(0x2ea), _0x343083(0x27f), myParseInt, 0x0)
    [_0x343083(0x302)](
      _0x343083(0x30f),
      _0x343083(0x2a4),
      myParseString,
      '/health'
    )
    [_0x343083(0x302)](_0x343083(0x18f), _0x343083(0x2ec), myParseInt, 0x3c),
    addCommonOptions(_0x20708b, _0xc74d25)
}
function addCommonOptions (_0x77fca8, _0x4e3cec) {
  const _0x38b992 = a0_0x20adc7
  let _0x5eb521 = _0x77fca8[_0x38b992(0x26c)]['find'](
    _0x2e5a8d => _0x2e5a8d[_0x38b992(0x1e1)] === _0x4e3cec
  )
  _0x5eb521[_0x38b992(0x302)](
    '--ignoreCertificateErrors',
    _0x38b992(0x262),
    ![]
  )
    ['option'](
      _0x38b992(0x280),
      'Comma\x20separated\x20list\x20of\x20folders\x20and\x20files\x20containing\x20additional\x20CA\x20certificates.',
      DEFAULT_CA_FOLDER
    )
    [_0x38b992(0x302)](_0x38b992(0x1cb), 'Show\x20details', ![])
    [_0x38b992(0x302)](_0x38b992(0x20e), _0x38b992(0x20b), ![])
}
function execError (_0xcbc016) {
  const _0x19334b = a0_0x20adc7
  let _0x2fde20 = _0xcbc016['stdout']['trim'](),
    _0x3ff04d = _0xcbc016[_0x19334b(0x1e8)][_0x19334b(0x21d)]()
  if (!_0x2fde20) return _0x3ff04d
  else return !_0x3ff04d ? _0x2fde20 : _0x2fde20 + '\x0a' + _0x3ff04d
}
async function launchFromToken (_0x44c4d3, _0x20ebf6, _0x740105, _0x55e889) {
  const _0x48f6c3 = a0_0x20adc7
  let _0x37f076 = ''
  _0x55e889[_0x48f6c3(0x307)] && (_0x37f076 += _0x48f6c3(0x286))
  _0x55e889[_0x48f6c3(0x2f0)] &&
    (_0x37f076 += _0x48f6c3(0x2e5) + _0x55e889[_0x48f6c3(0x2f0)])
  let _0x4a78c7 = _0x48f6c3(0x2d9)
  ;(await fileExists(_0x4a78c7)) &&
    (await a0_0x75518d[_0x48f6c3(0x195)](_0x4a78c7))
  let _0x5707cc =
    _0x48f6c3(0x206) +
    _0x44c4d3 +
    '\x22\x20\x22' +
    _0x20ebf6 +
    _0x48f6c3(0x2b5) +
    _0x740105 +
    '\x22\x20' +
    _0x37f076 +
    _0x48f6c3(0x2f7) +
    _0x4a78c7
  execNoThrow(_0x5707cc),
    console[_0x48f6c3(0x222)]('Logging\x20to\x20' + _0x4a78c7),
    process['stdout'][_0x48f6c3(0x2bd)](_0x48f6c3(0x2cb))
  for (;;) {
    if (!tunnelActive()) process[_0x48f6c3(0x2c3)]['write']('.')
    else {
      let _0x29c1a0 = await getCurrentConnectionInfo(),
        _0x516da9 = await doPing(_0x29c1a0)
      if (_0x516da9) {
        console['log'](),
          console[_0x48f6c3(0x222)](_0x48f6c3(0x2df) + _0x29c1a0['ip']),
          console[_0x48f6c3(0x222)](
            _0x48f6c3(0x299) + _0x29c1a0['deviceInfo'][_0x48f6c3(0x1cc)]
          ),
          console[_0x48f6c3(0x222)](
            _0x48f6c3(0x1fe) + _0x29c1a0[_0x48f6c3(0x2aa)]['userName']
          ),
          console[_0x48f6c3(0x222)](_0x48f6c3(0x2ee))
        break
      } else process[_0x48f6c3(0x2c3)][_0x48f6c3(0x2bd)]('.')
    }
    await a0_0x5dfe6f[_0x48f6c3(0x1c5)](0x3e8)
  }
}
async function main () {
  const _0xe3657 = a0_0x20adc7
  try {
    const _0x17998b = new a0_0x4bf4a0[_0xe3657(0x274)]()
    _0x17998b[_0xe3657(0x1ba)](_0xe3657(0x314))
      [_0xe3657(0x301)](![])
      [_0xe3657(0x204)](CLIENT_VERSION),
      _0x17998b[_0xe3657(0x31d)](_0xe3657(0x187))
        ['description'](
          'Create\x20a\x20new\x20profile\x20and\x20start\x20the\x20tunnel.\x0a' +
            _0xe3657(0x2c6) +
            _0xe3657(0x182)
        )
        [_0xe3657(0x302)](_0xe3657(0x2e9), _0xe3657(0x2ef), ![])
        [_0xe3657(0x302)](_0xe3657(0x291), _0xe3657(0x1b5), ![])
        [_0xe3657(0x302)]('-b|--background', _0xe3657(0x249))
        [_0xe3657(0x2a7)](async function (_0x799999, _0x1b67c5, _0x5d8d31) {
          const _0x4c638c = _0xe3657
          await setupShieldCertificate(_0x5d8d31)
          if (tunnelActive())
            throw new ErrorWithoutStacktrace(
              'ZTEdge\x20tunnel\x20is\x20currently\x20active'
            )
          _0x1b67c5 = _0x1b67c5?.[_0x4c638c(0x21d)]()
          let _0x592d35 = _0x5d8d31['password']?.[_0x4c638c(0x21d)](),
            _0x26052b = _0x5d8d31[_0x4c638c(0x2f0)],
            _0x432966 = devNameToFileName(_0x799999, _0x1b67c5, _0x26052b)
          if (!_0x5d8d31[_0x4c638c(0x1fa)] && (await fileExists(_0x432966)))
            throw new ErrorWithoutStacktrace(_0x432966 + _0x4c638c(0x1c3))
          let _0x4ecd84 = await getSystemInfo(_0x799999, _0x5d8d31),
            _0x1db601 = await newApiCreateDevice(
              _0x4ecd84,
              _0x26052b,
              _0x1b67c5,
              _0x592d35,
              _0x5d8d31
            ),
            _0x5aaf05 = {
              devicePrivateKey: _0x1db601[_0x4c638c(0x245)][_0x4c638c(0x1fd)],
              isConnector: _0x5d8d31[_0x4c638c(0x205)],
              userName: _0x1db601[_0x4c638c(0x219)][_0x4c638c(0x2f1)],
              userId: _0x1db601['authenticationInfo'][_0x4c638c(0x26b)]
            },
            _0x3038dc = await saveProfile(_0x799999, _0x5aaf05, _0x26052b)
          console[_0x4c638c(0x222)](_0x4c638c(0x2d8) + _0x3038dc)
          if (_0x5d8d31[_0x4c638c(0x29e)])
            await launchFromToken(
              _0x799999,
              _0x1b67c5,
              _0x1db601['authenticationInfo'][_0x4c638c(0x29d)],
              _0x5d8d31
            )
          else {
            if (!_0x5d8d31['authenticateOnly']) {
              let _0xd62df5 = await readProfile(_0x3038dc)
              await newApiLaunchTunnel(
                _0x1db601[_0x4c638c(0x219)]['authenticationToken'],
                _0x4ecd84,
                _0xd62df5,
                _0x5d8d31
              )
            } else console[_0x4c638c(0x222)](_0x4c638c(0x31e))
          }
        }),
      addConnectOptions(_0x17998b, _0xe3657(0x281)),
      _0x17998b[_0xe3657(0x31d)](_0xe3657(0x22e))
        [_0xe3657(0x1ba)](
          _0xe3657(0x1d8) +
            'Will\x20match\x20an\x20existing\x20profile\x20based\x20on\x20the\x20supplied\x20<cloudId>\x20and\x20<user>.\x0a' +
            _0xe3657(0x2d2) +
            _0xe3657(0x182)
        )
        [_0xe3657(0x302)](_0xe3657(0x1ee), _0xe3657(0x1c0), ![])
        ['option'](_0xe3657(0x1b4), _0xe3657(0x249))
        [_0xe3657(0x2a7)](async function (_0x27a773, _0x454668, _0x469fac) {
          const _0x4fa870 = _0xe3657
          await setupShieldCertificate(_0x469fac)
          if (tunnelActive()) throw new ErrorWithoutStacktrace(_0x4fa870(0x260))
          _0x454668 = _0x454668?.['trim']()
          let _0x4d3393 = _0x469fac['password']?.[_0x4fa870(0x21d)](),
            _0x2ec11a = _0x469fac['deviceName'],
            _0x3c3224 = await findMatchingProfile(
              _0x27a773,
              _0x454668,
              _0x2ec11a
            ),
            _0x273d12 = await getSystemInfo(
              _0x3c3224[_0x4fa870(0x1cc)],
              _0x469fac
            ),
            _0x6e242f = await newApiAuthenticateDevice(
              _0x273d12,
              _0x3c3224,
              _0x4d3393,
              _0x469fac
            )
          if (_0x469fac[_0x4fa870(0x29e)])
            await launchFromToken(
              _0x3c3224[_0x4fa870(0x1cc)],
              _0x454668,
              _0x6e242f['authenticationToken'],
              _0x469fac
            )
          else
            !_0x469fac['authenticateOnly']
              ? await newApiLaunchTunnel(
                  _0x6e242f[_0x4fa870(0x29d)],
                  _0x273d12,
                  _0x3c3224,
                  _0x469fac
                )
              : console['log'](_0x4fa870(0x31e))
        }),
      addConnectOptions(_0x17998b, 'up'),
      _0x17998b[_0xe3657(0x31d)](_0xe3657(0x1d2))
        [_0xe3657(0x1ba)](
          _0xe3657(0x265) + _0xe3657(0x1bf) + _0xe3657(0x2d2) + _0xe3657(0x182)
        )
        ['action'](async function (_0x15bbb3, _0x1671c9, _0x1a6f75, _0x27ce3a) {
          const _0x573fea = _0xe3657
          await setupShieldCertificate(_0x27ce3a)
          if (tunnelActive())
            throw new ErrorWithoutStacktrace(
              'ZTEdge\x20tunnel\x20is\x20currently\x20active'
            )
          let _0x216bbf = _0x27ce3a[_0x573fea(0x2f0)],
            _0x26b75d = await findMatchingProfile(
              _0x15bbb3,
              _0x1671c9,
              _0x216bbf
            )
          _0x27ce3a[_0x573fea(0x1ae)] = !![]
          let _0x889b40 = await getSystemInfo(_0x26b75d['tenant'], _0x27ce3a)
          await newApiLaunchTunnel(_0x1a6f75, _0x889b40, _0x26b75d, _0x27ce3a)
        }),
      addConnectOptions(_0x17998b, _0xe3657(0x27d)),
      _0x17998b[_0xe3657(0x31d)]('down')
        [_0xe3657(0x1ba)](_0xe3657(0x2fe))
        [_0xe3657(0x2a7)](async function (_0x24c766) {
          await setupShieldCertificate(_0x24c766)
          if (!tunnelActive())
            throw new ErrorWithoutStacktrace(
              'ZTEdge\x20tunnel\x20is\x20not\x20currently\x20active'
            )
          await stopTunnel(_0x24c766)
        }),
      addCommonOptions(_0x17998b, _0xe3657(0x2d3)),
      _0x17998b[_0xe3657(0x31d)]('import\x20<file>\x20[<user>]')
        [_0xe3657(0x1ba)](_0xe3657(0x1ef) + _0xe3657(0x24f))
        [_0xe3657(0x302)]('--password\x20<password>', _0xe3657(0x298), null)
        [_0xe3657(0x302)](_0xe3657(0x2f3), _0xe3657(0x25b), ![])
        [_0xe3657(0x2a7)](async function (_0x1adcbf, _0x24a714, _0x27181a) {
          const _0x2b94ac = _0xe3657
          await setupShieldCertificate(_0x27181a)
          let _0x5e7891 = await a0_0x75518d['readFile'](
              _0x1adcbf,
              _0x2b94ac(0x1ce)
            ),
            _0x523556 = _0x5e7891[_0x2b94ac(0x223)](/PrivateKey = (.*)/)[0x1],
            _0x19b4b8 = _0x5e7891[_0x2b94ac(0x223)](/host = ([^.]*)/)[0x1],
            _0x5017d8 = a0_0x350211['hostname'](),
            _0x1381e0 = await getSystemInfo(_0x19b4b8, _0x27181a),
            _0x37241c = {
              version: CLIENT_VERSION,
              tenant: _0x19b4b8,
              deviceName: _0x5017d8,
              publicKey: await getPublicKey(_0x523556),
              user: _0x24a714
            },
            _0x60b52b = await newApiAuthenticateDevice(
              _0x1381e0,
              _0x37241c,
              _0x27181a[_0x2b94ac(0x1ec)],
              _0x27181a
            )
          if (!_0x60b52b[_0x2b94ac(0x2f1)]) {
            if (!_0x24a714) throw new ErrorWithoutStacktrace(_0x2b94ac(0x1bb))
            _0x60b52b[_0x2b94ac(0x2f1)] = _0x24a714
          }
          _0x60b52b[_0x2b94ac(0x1c8)] = _0x523556
          let _0x31eac0 = await saveProfile(_0x19b4b8, _0x60b52b, _0x5017d8)
          console[_0x2b94ac(0x222)](_0x2b94ac(0x2d8) + _0x31eac0)
        }),
      addCommonOptions(_0x17998b, _0xe3657(0x26f)),
      _0x17998b[_0xe3657(0x31d)]('ls')
        [_0xe3657(0x1ba)](_0xe3657(0x1dd))
        ['action'](async function (_0x205f6d) {
          const _0x28dc09 = _0xe3657
          await setupShieldCertificate(_0x205f6d)
          let _0x1297fb = (await fileExists(deviceFolder))
            ? await a0_0x75518d[_0x28dc09(0x1a0)](deviceFolder)
            : []
          console[_0x28dc09(0x222)](_0x28dc09(0x1d6) + deviceFolder),
            (_0x1297fb = _0x1297fb['filter'](_0x241655 =>
              _0x241655[_0x28dc09(0x1ff)](_0x28dc09(0x27b))
            ))
          if (_0x1297fb[_0x28dc09(0x239)]) {
            let _0x373730 = await Promise[_0x28dc09(0x1f5)](
                _0x1297fb['map'](_0x22c5cb =>
                  readProfile(a0_0x10645d['join'](deviceFolder, _0x22c5cb))
                )
              ),
              _0x2a92dc = Math[_0x28dc09(0x2ba)](
                ..._0x373730[_0x28dc09(0x186)](
                  _0x5d6cd7 => _0x5d6cd7[_0x28dc09(0x1cc)][_0x28dc09(0x239)]
                )
              )
            for (let _0x2d91f6 of _0x373730) {
              console[_0x28dc09(0x222)](
                _0x2d91f6[_0x28dc09(0x1cc)]['padEnd'](_0x2a92dc + 0x5, '\x20') +
                  _0x2d91f6[_0x28dc09(0x23d)]
              )
            }
          } else console[_0x28dc09(0x222)]('No\x20saved\x20profiles')
        }),
      addCommonOptions(_0x17998b, 'ls'),
      _0x17998b[_0xe3657(0x31d)](_0xe3657(0x1ac))
        [_0xe3657(0x1ba)](_0xe3657(0x211))
        ['action'](async function (_0x539c42) {
          const _0x592a30 = _0xe3657
          await setupShieldCertificate(_0x539c42)
          if (!tunnelActive()) console[_0x592a30(0x222)](_0x592a30(0x1b9))
          else {
            let _0x496f14 = await getCurrentConnectionInfo(),
              _0x46bf42 = await doPing(_0x496f14)
            console[_0x592a30(0x222)](
              _0x592a30(0x299) + _0x496f14[_0x592a30(0x2aa)][_0x592a30(0x1cc)]
            ),
              console[_0x592a30(0x222)](
                _0x592a30(0x1fe) + _0x496f14[_0x592a30(0x2aa)][_0x592a30(0x2f1)]
              ),
              console['log'](_0x592a30(0x2df) + _0x496f14['ip']),
              _0x46bf42
                ? console[_0x592a30(0x222)](_0x592a30(0x2ee))
                : console[_0x592a30(0x222)](
                    'Tunnel\x20is\x20not\x20functioning\x20properly'
                  ),
              _0x496f14[_0x592a30(0x2aa)][_0x592a30(0x1f0)] &&
                console[_0x592a30(0x222)](
                  _0x592a30(0x308) + _0x496f14['deviceInfo']['monitorPid']
                )
          }
        }),
      addCommonOptions(_0x17998b, _0xe3657(0x1ac)),
      _0x17998b[_0xe3657(0x31d)](_0xe3657(0x315))
        [_0xe3657(0x1ba)](
          _0xe3657(0x1d7) +
            _0xe3657(0x30c) +
            '-\x20\x20create\x20a\x20profile\x20with\x20\x22sudo\x20ztedge-client\x20new\x20tenant\x20user\x20[--connector]\x20--authenticate-only\x20...\x22\x0a' +
            _0xe3657(0x304)
        )
        [_0xe3657(0x302)](_0xe3657(0x1e2), _0xe3657(0x1d0))
        [_0xe3657(0x302)](
          '--device-name\x20<name>',
          _0xe3657(0x30b),
          myParseString,
          a0_0x350211[_0xe3657(0x2fa)]()
        )
        ['action'](async function (_0x155d2e, _0x51a485, _0x5e56bc) {
          const _0xf61b1 = _0xe3657
          if (!(await a0_0x27bba9()))
            throw new ErrorWithoutStacktrace(_0xf61b1(0x224))
          if (tunnelActive())
            throw new ErrorWithoutStacktrace(
              'ZTEdge\x20tunnel\x20is\x20currently\x20active'
            )
          let _0x3367f3 = _0x5e56bc[_0xf61b1(0x2f0)],
            _0x4de49c = await findMatchingProfile(
              _0x155d2e,
              _0x51a485,
              _0x3367f3
            ),
            _0x4150e4 = _0xf61b1(0x2c4) + _0x5e56bc[_0xf61b1(0x227)] + '\x22'
          _0x5e56bc['ignoreCertificateErrors'] && (_0x4150e4 += _0xf61b1(0x1a4))
          _0x5e56bc[_0xf61b1(0x1c2)] && (_0x4150e4 += '\x20--verbose')
          _0x5e56bc[_0xf61b1(0x307)] && (_0x4150e4 += _0xf61b1(0x286))
          _0x5e56bc[_0xf61b1(0x2f0)] &&
            (_0x4150e4 +=
              '\x20--device-name\x20\x22' + _0x5e56bc[_0xf61b1(0x2f0)] + '\x22')
          _0x4150e4 += '\x20--service'
          let _0xe314d5 = a0_0x10645d['join'](__dirname, 'ztedge-client'),
            _0x5e722a =
              _0xf61b1(0x2c0) +
              'Description=ZTEdge\x0a' +
              '\x0a' +
              '[Service]\x0a' +
              'Restart=on-failure\x0a' +
              'RestartSec=15s\x0a' +
              (_0xf61b1(0x184) +
                _0xe314d5 +
                _0xf61b1(0x2d5) +
                _0x4de49c['tenant'] +
                _0xf61b1(0x2b5) +
                _0x4de49c['user'] +
                '\x22\x20' +
                _0x4150e4 +
                '\x0a') +
              '\x0a' +
              _0xf61b1(0x248) +
              'WantedBy=multi-user.target\x0a'
          await a0_0x75518d[_0xf61b1(0x23f)](_0xf61b1(0x18a), _0x5e722a, 'utf8')
          let _0x2cf4a0 = await execNoThrow(_0xf61b1(0x303))
          if (_0x2cf4a0[_0xf61b1(0x1af)])
            throw new ErrorWithoutStacktrace(
              _0xf61b1(0x2c9) + execError(_0x2cf4a0)
            )
          if (_0x5e56bc['start']) {
            _0x2cf4a0 = await execNoThrow(_0xf61b1(0x27e))
            if (_0x2cf4a0[_0xf61b1(0x1af)])
              throw new ErrorWithoutStacktrace(
                _0xf61b1(0x2fd) + execError(_0x2cf4a0)
              )
            _0x2cf4a0 = await execNoThrow(_0xf61b1(0x2b0))
            if (_0x2cf4a0[_0xf61b1(0x1af)])
              throw new ErrorWithoutStacktrace(
                _0xf61b1(0x261) + execError(_0x2cf4a0)
              )
            process['stdout'][_0xf61b1(0x2bd)]('Starting\x20service\x20.')
            for (let _0x492d1b = 0x0; _0x492d1b < 0x5; ++_0x492d1b) {
              await a0_0x5dfe6f[_0xf61b1(0x1c5)](0x3e8),
                process[_0xf61b1(0x2c3)][_0xf61b1(0x2bd)]('.')
            }
            console[_0xf61b1(0x222)](),
              (_0x2cf4a0 = await execNoThrow('systemctl\x20status\x20ztedge')),
              console[_0xf61b1(0x222)](execError(_0x2cf4a0)),
              console['log'](_0xf61b1(0x2b4))
          } else console[_0xf61b1(0x222)]('ztedge\x20service\x20created,\x20but\x20not\x20started\x20or\x20enabled')
        }),
      addCommonOptions(_0x17998b, _0xe3657(0x199)),
      ![] &&
        process[_0xe3657(0x24c)][_0xe3657(0x239)] === 0x2 &&
        __dirname[_0xe3657(0x29c)](_0xe3657(0x2b8)) &&
        (console[_0xe3657(0x222)](_0xe3657(0x1d3)),
        (process['argv'] = ['', '', ...cmd['trim']()[_0xe3657(0x2bf)](/ +/)])),
      await _0x17998b[_0xe3657(0x253)](process[_0xe3657(0x24c)])
  } catch (_0x2b669c) {
    _0x2b669c[_0xe3657(0x208)] === _0xe3657(0x1dc)
      ? console[_0xe3657(0x222)](_0x2b669c[_0xe3657(0x297)])
      : console[_0xe3657(0x222)](_0x2b669c),
      (process['exitCode'] = 0x1)
  }
  !shutdownInProgress && process[_0xe3657(0x2b1)]()
}
main()
