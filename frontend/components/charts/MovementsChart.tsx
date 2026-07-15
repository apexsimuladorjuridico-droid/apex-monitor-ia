"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const chartData = [
  { day: "Seg", movements: 28 },
  { day: "Ter", movements: 42 },
  { day: "Qua", movements: 35 },
  { day: "Qui", movements: 58 },
  { day: "Sex", movements: 49 },
  { day: "Sáb", movements: 63 },
  { day: "Dom", movements: 47 },
];

export default function MovementsChart() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-[#05091c] p-6">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-bold text-white">
            Movimentações processuais
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Quantidade de movimentações encontradas nos últimos sete dias.
          </p>
        </div>

        <select
          aria-label="Selecionar período"
          className="rounded-xl border border-slate-800 bg-slate-950 px-4 py-2 text-sm text-slate-300 outline-none transition focus:border-cyan-500"
          defaultValue="7dias"
        >
          <option value="7dias">Últimos 7 dias</option>
          <option value="30dias">Últimos 30 dias</option>
          <option value="90dias">Últimos 90 dias</option>
        </select>
      </div>

      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient
                id="movementsGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#06b6d4"
                  stopOpacity={0.35}
                />

                <stop
                  offset="95%"
                  stopColor="#06b6d4"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              stroke="#1e293b"
              strokeDasharray="4 4"
              vertical={false}
            />

            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#64748b",
                fontSize: 12,
              }}
              dy={10}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#64748b",
                fontSize: 12,
              }}
            />

            <Tooltip
              cursor={{
                stroke: "#06b6d4",
                strokeDasharray: "4 4",
              }}
              contentStyle={{
                backgroundColor: "#020617",
                border: "1px solid #1e293b",
                borderRadius: "12px",
                color: "#ffffff",
              }}
              labelStyle={{
                color: "#94a3b8",
              }}
              formatter={(value) => [
                `${value} movimentações`,
                "Quantidade",
              ]}
            />

            <Area
              type="monotone"
              dataKey="movements"
              stroke="#06b6d4"
              strokeWidth={3}
              fill="url(#movementsGradient)"
              activeDot={{
                r: 6,
                fill: "#06b6d4",
                stroke: "#030617",
                strokeWidth: 3,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}