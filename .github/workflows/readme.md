      - name: Setup node env 🏗
        uses: actions/setup-node@v2.1.5
        with:
          node-version: ${{ matrix.node }}
          check-latest: true

      - name: Cache node_modules 📦
        uses: actions/cache@v2
        with:
          path: ~/.npm
          key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-node-
      - name: Install dependencies 👨🏻‍💻
        run: |
            cd cocomon_dev
            pwd
            node -v
            npm -v
            npm ci
      # - name: Run tests 🧪
      #  run:  |\
      #      node -v
      #      npm -v
      #      npm run test      
      - name: Run Dev start
        run:  |
            cd cocomon_dev
            pwd
            node -v
            npm -v
            pm2 reload echosystem.config.js --only cocomon_dev
            pm2 list
        env:
          CI : true
          #  pm2 reload echosystem.config.js --watch
          # sh start.sh