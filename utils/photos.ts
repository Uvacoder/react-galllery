import { useState, useCallback, useEffect } from 'react'
import data from '../db/data.json'
import type { ImageInterface } from '../types/Images'

export const getAllImages = (): Array<ImageInterface> => {
  return data
}
