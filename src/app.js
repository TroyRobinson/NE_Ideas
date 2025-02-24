import * as React from 'react'
import '../public/globals.css'
import { FlexCol } from './utils'

export var App = () => {
  return (
    <FlexCol
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
      }}
    >
      {/* Simulated browser top bar */}
      <div
        style={{
          width: '100%',
          height: 40,
          backgroundColor: '#D1D5DB', // Light gray
          display: 'flex',
          alignItems: 'center',
          padding: '0 16px',
        }}
      >
        {/* "Traffic light" dots */}
        <div
          style={{
            width: 12,
            height: 12,
            borderRadius: '50%',
            backgroundColor: '#bbb',
            marginRight: 8,
          }}
        />
        <div
          style={{
            width: 12,
            height: 12,
            borderRadius: '50%',
            backgroundColor: '#bbb',
            marginRight: 8,
          }}
        />
        <div
          style={{
            width: 12,
            height: 12,
            borderRadius: '50%',
            backgroundColor: '#bbb',
          }}
        />
      </div>

      {/* Main header section */}
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          padding: '24px',
        }}
      >
        {/* Left side text group */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span
            style={{
              fontSize: 14,
              color: '#7B61FF', // Purple
              marginBottom: 8,
            }}
          >
            Tulsa Statistic
          </span>

          <span
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: '#000000',
              marginBottom: 8,
            }}
          >
            Poverty Rate: Children
          </span>

          <span style={{ fontSize: 14, color: '#000000' }}>
            Denominator:{' '}
            <a
              href='#'
              style={{ textDecoration: 'none', color: '#7B61FF' }}
            >
              Total Population under 18
            </a>
          </span>
        </div>

        {/* Right side stats group */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* Percentage + label blocks */}
          <div style={{ marginRight: 24, textAlign: 'center' }}>
            <div
              style={{
                fontSize: 24,
                fontWeight: 700,
                color: '#7B61FF',
              }}
            >
              17.3%
            </div>
            <div style={{ fontSize: 14, color: '#000000' }}>
              22,323 youth
            </div>
          </div>

          <div style={{ marginRight: 24, textAlign: 'center' }}>
            <div
              style={{
                fontSize: 24,
                fontWeight: 700,
                color: '#FF4E4E', // Red
              }}
            >
              +3.2%
            </div>
            <div style={{ fontSize: 14, color: '#000000' }}>
              Year Change
            </div>
          </div>

          <div style={{ marginRight: 24, textAlign: 'center' }}>
            <div
              style={{
                fontSize: 24,
                fontWeight: 700,
                color: '#27AE60', // Green
              }}
            >
              -16.5%
            </div>
            <div style={{ fontSize: 14, color: '#000000' }}>
              Total Change
            </div>
          </div>

          {/* Bookmark icon + Following count */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div
              style={{
                width: 24,
                height: 24,
                backgroundColor: '#7B61FF',
                marginRight: 8,
                borderRadius: 4, // placeholder for a bookmark icon
              }}
            />
            <span style={{ fontSize: 14, color: '#000000' }}>
              Following: 15
            </span>
          </div>
        </div>
      </div>
    </FlexCol>
  )
}
