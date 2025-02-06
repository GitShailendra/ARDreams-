const StatsWidget = ({ title, value, change, icon: Icon }) => {
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div className={`p-2 rounded-lg bg-[#F7A31C]/10 text-[#F7A31C]`}>
            <Icon className="w-6 h-6" />
          </div>
          {change && (
            <span className={`text-sm ${change > 0 ? 'text-green-500' : 'text-red-500'}`}>
              {change > 0 ? '+' : ''}{change}%
            </span>
          )}
        </div>
        <h3 className="mt-4 text-sm text-gray-600">{title}</h3>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
    );
  };
  