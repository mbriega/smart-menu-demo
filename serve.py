import http.server, socketserver

class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        super().end_headers()
    def log_message(self, format, *args):
        pass  # silent

with socketserver.TCPServer(('', 5500), NoCacheHandler) as httpd:
    print('Servidor en http://localhost:5500')
    httpd.serve_forever()
