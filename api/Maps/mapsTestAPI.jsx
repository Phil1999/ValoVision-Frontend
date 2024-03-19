import { fetchMaps, createMap, updateMap, deleteMap } from '@/api/Maps/mapsApi';

export default async function handler(req, res) {
  // Example of fetching maps
  try {
    const maps = await fetchMaps();
    res.status(200).json(maps);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch maps' });
  }
}