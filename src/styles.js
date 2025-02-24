export const styles = {
    'Orthophoto (LISTmap)': {
        'version': 8,
        'sources': {
            'tile': {
                'type': 'raster',
                'tiles': ['https://services.thelist.tas.gov.au/arcgis/rest/services/Basemaps/Orthophoto/MapServer/tile/{z}/{y}/{x}'],
                'tileSize': 256,
                'attribution': '<a href="https://services.thelist.tas.gov.au/arcgis/rest/services/Basemaps">&copy; NRE Tasmania</a>',
                'minzoom': 6,
                'maxzoom': 19
            }
        },
        'layers': [
            {
                'id': 'raster',
                'type': 'raster',
                'source': 'tile',
            }
        ]
    },
    'Aerial Photo 2021 (LISTmap)': {
        'version': 8,
        'sources': {
            'tile': {
                'type': 'raster',
                'tiles': ['https://services.thelist.tas.gov.au/arcgis/rest/services/Basemaps/AerialPhoto2021/MapServer/tile/{z}/{y}/{x}'],
                'tileSize': 256,
                'attribution': '<a href="https://services.thelist.tas.gov.au/arcgis/rest/services/Basemaps">&copy; NRE Tasmania</a>',
                'minzoom': 6,
                'maxzoom': 19
            }
        },
        'layers': [
            {
                'id': 'raster',
                'type': 'raster',
                'source': 'tile',
            }
        ]
    },
    'Streets (Mapbox)': 'mapbox://styles/mapbox/streets-v12',
    'Satellite (Mapbox)': 'mapbox://styles/mapbox/satellite-v9'
};