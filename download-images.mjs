import fs from 'fs'
import path from 'path'

// High quality direct image URLs from Unsplash, Wikimedia Commons & Free Solar Sources
const imageSources = {
  'hero.jpg': [
    'https://images.unsplash.com/photo-1509391365360-2e959784a276?w=1600&auto=format&fit=crop&q=80',
    'https://upload.wikimedia.org/wikipedia/commons/b/b8/Photovoltaik_Dachanlage_Hannover_-_ebproc_-_001.JPG',
    'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1600'
  ],
  'commercial.jpg': [
    'https://images.unsplash.com/photo-1508873696983-2df5293cb32b?w=1200&auto=format&fit=crop&q=80',
    'https://upload.wikimedia.org/wikipedia/commons/4/4e/Solar_Panels_at_the_Solar_Settlement_in_Freiburg.jpg',
    'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1200'
  ],
  'residential.jpg': [
    'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&auto=format&fit=crop&q=80',
    'https://upload.wikimedia.org/wikipedia/commons/7/7b/Modern_house_with_solar_panels_in_Germany.jpg',
    'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=1200'
  ],
  'battery.jpg': [
    'https://images.unsplash.com/photo-1558441719-8b489c638a10?w=1200&auto=format&fit=crop&q=80',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Tesla_Powerwall_2_installed.jpg/1200px-Tesla_Powerwall_2_installed.jpg',
    'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1200'
  ],
  'engineer.jpg': [
    'https://images.unsplash.com/photo-1613665813446-8285296d112c?w=1200&auto=format&fit=crop&q=80',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Solar_panel_installation_worker.jpg/1200px-Solar_panel_installation_worker.jpg',
    'https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg?auto=compress&cs=tinysrgb&w=1200'
  ],
  'team.jpg': [
    'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&auto=format&fit=crop&q=80',
    'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200'
  ],
  'farm.jpg': [
    'https://images.unsplash.com/photo-1545208942-e1c9c916524b?w=1200&auto=format&fit=crop&q=80',
    'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=1200'
  ],
  'inverter.jpg': [
    'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&auto=format&fit=crop&q=80',
    'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1200'
  ],
  'sky.jpg': [
    'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1600&auto=format&fit=crop&q=80',
    'https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg?auto=compress&cs=tinysrgb&w=1600'
  ],
  'team1.jpg': [
    'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=80',
    'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'
  ],
  'team2.jpg': [
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80',
    'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600'
  ],
  'team3.jpg': [
    'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=80',
    'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600'
  ],
  'team4.jpg': [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80',
    'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600'
  ],
  'client1.jpg': [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80',
    'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300'
  ],
  'client2.jpg': [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
    'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300'
  ],
  'client3.jpg': [
    'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=300&auto=format&fit=crop&q=80',
    'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300'
  ],
  'client4.jpg': [
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80',
    'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300'
  ]
}

const dir = path.join(process.cwd(), 'public', 'images')
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })

async function downloadFile(url) {
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'
    }
  })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const buffer = Buffer.from(await res.arrayBuffer())
  if (buffer.length < 1000) throw new Error(`Too small (${buffer.length} bytes)`)
  return buffer
}

async function run() {
  console.log('Downloading high quality images with fetch...')
  for (const [filename, urls] of Object.entries(imageSources)) {
    const dest = path.join(dir, filename)
    let downloaded = false

    for (const url of urls) {
      try {
        const buf = await downloadFile(url)
        fs.writeFileSync(dest, buf)
        console.log(`✓ ${filename}: SUCCESS (${buf.length} bytes) from ${url.substring(0, 40)}...`)
        downloaded = true
        break
      } catch (err) {
        console.log(`  Attempt failed for ${filename}: ${err.message}`)
      }
    }

    if (!downloaded) {
      console.warn(`✗ Could not download ${filename}`)
    }
  }
  console.log('Finished downloading.')
}

run()
