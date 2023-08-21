import { type ReportHandler } from 'web-vitals'

const reportWebVitals = async (onPerfEntry?: ReportHandler): Promise<void> => {
  if (onPerfEntry != null) {
    try {
      const webVitalsModule = await import('web-vitals')
      const { getCLS, getFID, getFCP, getLCP, getTTFB } = webVitalsModule

      getCLS(onPerfEntry)
      getFID(onPerfEntry)
      getFCP(onPerfEntry)
      getLCP(onPerfEntry)
      getTTFB(onPerfEntry)
    } catch (error) {
      // Handle the error if the import or any of the function calls fail
      console.error('Error loading or using web-vitals:', error)
    }
  }
}

export default reportWebVitals
