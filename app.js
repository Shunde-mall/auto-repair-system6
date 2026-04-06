/**
 * 汽车维修厂管理系统 - 主应用逻辑
 * 版本: 1.0.0
 */

// ========================================
// 数据模型
// ========================================

// 模拟数据 - 工单
const ordersData = [
    {
        id: 'WO-2026-0406',
        customer: '张先生',
        phone: '138****8888',
        plate: '粤B·88888',
        carModel: '宝马 5系',
        items: '发动机维修',
        technician: '王师傅',
        status: 'progress',
        amount: 3200,
        createTime: '2026-04-06 08:30'
    },
    {
        id: 'WO-2026-0405',
        customer: '李女士',
        phone: '139****1234',
        plate: '粤A·12345',
        carModel: '奔驰 C级',
        items: '更换刹车片',
        technician: '陈师傅',
        status: 'completed',
        amount: 1200,
        createTime: '2026-04-06 09:15'
    },
    {
        id: 'WO-2026-0404',
        customer: '王先生',
        phone: '137****6666',
        plate: '粤B·66666',
        carModel: '奥迪 A6',
        items: '保养套餐',
        technician: '刘师傅',
        status: 'pending',
        amount: 1500,
        createTime: '2026-04-06 10:00'
    },
    {
        id: 'WO-2026-0403',
        customer: '赵女士',
        phone: '136****9999',
        plate: '粤C·99999',
        carModel: '大众 帕萨特',
        items: '四轮定位',
        technician: '张师傅',
        status: 'settled',
        amount: 400,
        createTime: '2026-04-05 14:20'
    },
    {
        id: 'WO-2026-0402',
        customer: '刘先生',
        phone: '135****5555',
        plate: '粤B·55555',
        carModel: '丰田 凯美瑞',
        items: '更换机油 + 滤芯',
        technician: '刘师傅',
        status: 'completed',
        amount: 680,
        createTime: '2026-04-05 11:30'
    },
    {
        id: 'WO-2026-0401',
        customer: '陈女士',
        phone: '134****3333',
        plate: '粤A·33333',
        carModel: '本田 雅阁',
        items: '空调维修',
        technician: '王师傅',
        status: 'progress',
        amount: 2100,
        createTime: '2026-04-05 09:00'
    }
];

// 模拟数据 - 客户
const customersData = [
    {
        id: 'C001',
        name: '张先生',
        phone: '138****8888',
        plate: '粤B·88888',
        carModel: '宝马 5系',
        isVip: true,
        totalOrders: 12,
        totalSpent: 45600,
        lastVisit: '2026-04-06'
    },
    {
        id: 'C002',
        name: '李女士',
        phone: '139****1234',
        plate: '粤A·12345',
        carModel: '奔驰 C级',
        isVip: true,
        totalOrders: 8,
        totalSpent: 28900,
        lastVisit: '2026-04-06'
    },
    {
        id: 'C003',
        name: '王先生',
        phone: '137****6666',
        plate: '粤B·66666',
        carModel: '奥迪 A6',
        isVip: false,
        totalOrders: 3,
        totalSpent: 6500,
        lastVisit: '2026-04-06'
    },
    {
        id: 'C004',
        name: '赵女士',
        phone: '136****9999',
        plate: '粤C·99999',
        carModel: '大众 帕萨特',
        isVip: false,
        totalOrders: 5,
        totalSpent: 8900,
        lastVisit: '2026-04-05'
    },
    {
        id: 'C005',
        name: '刘先生',
        phone: '135****5555',
        plate: '粤B·55555',
        carModel: '丰田 凯美瑞',
        isVip: true,
        totalOrders: 15,
        totalSpent: 52000,
        lastVisit: '2026-04-05'
    },
    {
        id: 'C006',
        name: '陈女士',
        phone: '134****3333',
        plate: '粤A·33333',
        carModel: '本田 雅阁',
        isVip: false,
        totalOrders: 2,
        totalSpent: 3200,
        lastVisit: '2026-04-05'
    }
];

// 模拟数据 - 配件库存
const inventoryData = [
    {
        id: 'P001',
        name: '机油 5W-40',
        category: '机油',
        stock: 2,
        safeStock: 10,
        price: 280,
        status: 'warning'
    },
    {
        id: 'P002',
        name: '机油 0W-20',
        category: '机油',
        stock: 15,
        safeStock: 10,
        price: 320,
        status: 'sufficient'
    },
    {
        id: 'P003',
        name: '刹车片 (前)',
        category: '刹车系统',
        stock: 3,
        safeStock: 5,
        price: 450,
        status: 'low'
    },
    {
        id: 'P004',
        name: '刹车片 (后)',
        category: '刹车系统',
        stock: 6,
        safeStock: 5,
        price: 380,
        status: 'sufficient'
    },
    {
        id: 'P005',
        name: '空气滤芯',
        category: '滤芯',
        stock: 4,
        safeStock: 8,
        price: 85,
        status: 'low'
    },
    {
        id: 'P006',
        name: '空调滤芯',
        category: '滤芯',
        stock: 12,
        safeStock: 8,
        price: 95,
        status: 'sufficient'
    },
    {
        id: 'P007',
        name: '机油滤芯',
        category: '滤芯',
        stock: 20,
        safeStock: 15,
        price: 45,
        status: 'sufficient'
    },
    {
        id: 'P008',
        name: '米其林轮胎 225/45 R17',
        category: '轮胎',
        stock: 8,
        safeStock: 4,
        price: 850,
        status: 'sufficient'
    },
    {
        id: 'P009',
        name: '电瓶 60Ah',
        category: '电瓶',
        stock: 3,
        safeStock: 5,
        price: 580,
        status: 'low'
    }
];

// 模拟数据 - 员工
const employeesData = [
    {
        id: 'E001',
        name: '王师傅',
        avatar: '王',
        role: '高级技师',
        specialty: '发动机专家',
        phone: '138****1001',
        orders: 156,
        rating: 4.9,
        status: 'busy'
    },
    {
        id: 'E002',
        name: '陈师傅',
        avatar: '陈',
        role: '中级技师',
        specialty: '刹车系统',
        phone: '138****1002',
        orders: 98,
        rating: 4.7,
        status: 'available'
    },
    {
        id: 'E003',
        name: '刘师傅',
        avatar: '刘',
        role: '中级技师',
        specialty: '保养专家',
        phone: '138****1003',
        orders: 112,
        rating: 4.8,
        status: 'busy'
    },
    {
        id: 'E004',
        name: '张师傅',
        avatar: '张',
        role: '初级技师',
        specialty: '轮胎服务',
        phone: '138****1004',
        orders: 67,
        rating: 4.6,
        status: 'available'
    }
];

// ========================================
// 应用状态
// ========================================

const App = {
    currentPage: 'dashboard',
    
    init() {
        this.bindEvents();
        this.renderAll();
        console.log('汽车维修厂管理系统已启动');
    },
    
    bindEvents() {
        // 导航菜单点击
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const page = item.dataset.page;
                this.navigateTo(page);
            });
        });
        
        // 快速新建工单按钮
        const quickAddBtn = document.getElementById('quickAddBtn');
        if (quickAddBtn) {
            quickAddBtn.addEventListener('click', () => {
                this.navigateTo('orders');
                setTimeout(() => this.showOrderModal(), 100);
            });
        }
        
        // 新建工单按钮
        const newOrderBtn = document.getElementById('newOrderBtn');
        if (newOrderBtn) {
            newOrderBtn.addEventListener('click', () => this.showOrderModal());
        }
        
        // 新增客户按钮
        const newCustomerBtn = document.getElementById('newCustomerBtn');
        if (newCustomerBtn) {
            newCustomerBtn.addEventListener('click', () => this.showCustomerModal());
        }
        
        // 新增配件按钮
        const newPartBtn = document.getElementById('newPartBtn');
        if (newPartBtn) {
            newPartBtn.addEventListener('click', () => this.showPartModal());
        }
        
        // 新增员工按钮
        const newEmployeeBtn = document.getElementById('newEmployeeBtn');
        if (newEmployeeBtn) {
            newEmployeeBtn.addEventListener('click', () => this.showEmployeeModal());
        }
        
        // 键盘快捷键
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 'k') {
                e.preventDefault();
                document.querySelector('.search-input')?.focus();
            }
            if (e.key === 'Escape') {
                this.closeAllModals();
            }
        });
    },
    
    navigateTo(page) {
        this.currentPage = page;
        
        // 更新导航激活状态
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.toggle('active', item.dataset.page === page);
        });
        
        // 切换页面显示
        document.querySelectorAll('.page').forEach(p => {
            p.classList.remove('active');
        });
        const targetPage = document.getElementById(`${page}Page`);
        if (targetPage) {
            targetPage.classList.add('active');
        }
    },
    
    renderAll() {
        this.renderOrders();
        this.renderCustomers();
        this.renderInventory();
        this.renderEmployees();
    },
    
    // ========================================
    // 工单渲染
    // ========================================
    
    renderOrders() {
        const tbody = document.getElementById('ordersTableBody');
        if (!tbody) return;
        
        tbody.innerHTML = ordersData.map(order => `
            <tr>
                <td><span class="text-primary">${order.id}</span></td>
                <td>
                    <div>${order.customer}</div>
                    <div class="text-muted">${order.phone}</div>
                </td>
                <td>
                    <div>${order.plate}</div>
                    <div class="text-muted">${order.carModel}</div>
                </td>
                <td>${order.items}</td>
                <td>${order.technician}</td>
                <td><span class="status-badge ${order.status}">${this.getStatusText(order.status)}</span></td>
                <td>¥${order.amount.toLocaleString()}</td>
                <td>
                    <div class="table-actions">
                        <button class="table-action-btn" onclick="App.viewOrder('${order.id}')">查看</button>
                        <button class="table-action-btn" onclick="App.editOrder('${order.id}')">编辑</button>
                    </div>
                </td>
            </tr>
        `).join('');
    },
    
    getStatusText(status) {
        const statusMap = {
            pending: '待处理',
            progress: '进行中',
            completed: '已完成',
            settled: '已结算'
        };
        return statusMap[status] || status;
    },
    
    viewOrder(id) {
        const order = ordersData.find(o => o.id === id);
        if (order) {
            this.showToast('info', `查看工单 ${id}`, `客户: ${order.customer}, 车辆: ${order.plate}`);
        }
    },
    
    editOrder(id) {
        const order = ordersData.find(o => o.id === id);
        if (order) {
            this.showToast('info', `编辑工单 ${id}`, '功能开发中...');
        }
    },
    
    // ========================================
    // 客户渲染
    // ========================================
    
    renderCustomers() {
        const grid = document.getElementById('customersGrid');
        if (!grid) return;
        
        grid.innerHTML = customersData.map(customer => `
            <div class="customer-card" onclick="App.viewCustomer('${customer.id}')">
                <div class="customer-header">
                    <div class="customer-avatar">${customer.name[0]}</div>
                    <div>
                        <div class="customer-name">${customer.name}</div>
                        <div class="customer-phone">${customer.phone}</div>
                    </div>
                    ${customer.isVip ? '<span class="vip-badge">VIP</span>' : ''}
                </div>
                <div style="margin-bottom: 12px;">
                    <div class="text-muted" style="font-size: 12px;">${customer.plate} · ${customer.carModel}</div>
                </div>
                <div class="customer-stats">
                    <div class="customer-stat">
                        <div class="customer-stat-value">${customer.totalOrders}</div>
                        <div class="customer-stat-label">工单数</div>
                    </div>
                    <div class="customer-stat">
                        <div class="customer-stat-value">¥${(customer.totalSpent / 1000).toFixed(1)}k</div>
                        <div class="customer-stat-label">累计消费</div>
                    </div>
                    <div class="customer-stat">
                        <div class="customer-stat-value">${customer.lastVisit.split('-')[2]}</div>
                        <div class="customer-stat-label">最近来访</div>
                    </div>
                </div>
            </div>
        `).join('');
    },
    
    viewCustomer(id) {
        const customer = customersData.find(c => c.id === id);
        if (customer) {
            this.showToast('info', `客户详情`, `${customer.name} - ${customer.carModel}`);
        }
    },
    
    // ========================================
    // 库存渲染
    // ========================================
    
    renderInventory() {
        const tbody = document.getElementById('inventoryTableBody');
        if (!tbody) return;
        
        tbody.innerHTML = inventoryData.map(item => `
            <tr>
                <td><span class="text-primary">${item.id}</span></td>
                <td>${item.name}</td>
                <td>${item.category}</td>
                <td>${item.stock}</td>
                <td>${item.safeStock}</td>
                <td>¥${item.price}</td>
                <td><span class="inventory-status ${item.status}">${this.getInventoryStatusText(item.status)}</span></td>
                <td>
                    <div class="table-actions">
                        <button class="table-action-btn" onclick="App.stockIn('${item.id}')">入库</button>
                        <button class="table-action-btn" onclick="App.stockOut('${item.id}')">出库</button>
                        <button class="table-action-btn" onclick="App.editPart('${item.id}')">编辑</button>
                    </div>
                </td>
            </tr>
        `).join('');
    },
    
    getInventoryStatusText(status) {
        const statusMap = {
            sufficient: '库存充足',
            low: '库存偏低',
            warning: '库存预警'
        };
        return statusMap[status] || status;
    },
    
    stockIn(id) {
        this.showToast('success', '入库操作', `配件 ${id} 入库成功`);
    },
    
    stockOut(id) {
        this.showToast('success', '出库操作', `配件 ${id} 出库成功`);
    },
    
    editPart(id) {
        this.showToast('info', '编辑配件', `正在编辑配件 ${id}`);
    },
    
    // ========================================
    // 员工渲染
    // ========================================
    
    renderEmployees() {
        const grid = document.getElementById('employeesGrid');
        if (!grid) return;
        
        grid.innerHTML = employeesData.map(emp => `
            <div class="employee-card" onclick="App.viewEmployee('${emp.id}')">
                <div class="employee-avatar">${emp.avatar}</div>
                <div class="employee-name">${emp.name}</div>
                <div class="employee-role">${emp.role}</div>
                <div style="font-size: 12px; color: var(--text-muted); margin-bottom: 16px;">
                    ${emp.specialty}
                </div>
                <span class="tech-status ${emp.status}" style="display: inline-block; margin-bottom: 16px;">
                    ${emp.status === 'available' ? '空闲' : '维修中'}
                </span>
                <div class="employee-stats">
                    <div class="employee-stat">
                        <div class="employee-stat-value">${emp.orders}</div>
                        <div class="employee-stat-label">完成工单</div>
                    </div>
                    <div class="employee-stat">
                        <div class="employee-stat-value">${emp.rating}</div>
                        <div class="employee-stat-label">评分</div>
                    </div>
                </div>
            </div>
        `).join('');
    },
    
    viewEmployee(id) {
        const emp = employeesData.find(e => e.id === id);
        if (emp) {
            this.showToast('info', '员工详情', `${emp.name} - ${emp.role}`);
        }
    },
    
    // ========================================
    // 模态框
    // ========================================
    
    showOrderModal(order = null) {
        const title = order ? '编辑工单' : '新建工单';
        const content = `
            <form id="orderForm" onsubmit="App.submitOrder(event)">
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">客户姓名</label>
                        <input type="text" class="form-input" name="customer" placeholder="请输入客户姓名" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">联系电话</label>
                        <input type="tel" class="form-input" name="phone" placeholder="请输入联系电话" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">车牌号码</label>
                        <input type="text" class="form-input" name="plate" placeholder="如: 粤B·12345" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">车辆型号</label>
                        <input type="text" class="form-input" name="carModel" placeholder="如: 宝马 5系">
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label">维修项目</label>
                    <select class="form-select" name="items" required>
                        <option value="">请选择维修项目</option>
                        <option value="常规保养">常规保养</option>
                        <option value="发动机维修">发动机维修</option>
                        <option value="更换刹车片">更换刹车片</option>
                        <option value="四轮定位">四轮定位</option>
                        <option value="空调维修">空调维修</option>
                        <option value="更换机油">更换机油</option>
                        <option value="轮胎更换">轮胎更换</option>
                        <option value="电瓶更换">电瓶更换</option>
                        <option value="其他">其他</option>
                    </select>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">指派技师</label>
                        <select class="form-select" name="technician" required>
                            <option value="">请选择技师</option>
                            <option value="王师傅">王师傅 - 高级技师</option>
                            <option value="陈师傅">陈师傅 - 中级技师</option>
                            <option value="刘师傅">刘师傅 - 中级技师</option>
                            <option value="张师傅">张师傅 - 初级技师</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">预估金额</label>
                        <input type="number" class="form-input" name="amount" placeholder="请输入预估金额">
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label">备注</label>
                    <textarea class="form-textarea" name="notes" placeholder="请输入备注信息"></textarea>
                </div>
            </form>
        `;
        
        this.showModal(title, content, [
            { text: '取消', class: 'btn-outline', action: () => this.closeModal() },
            { text: '保存', class: 'btn-primary', action: () => document.getElementById('orderForm').dispatchEvent(new Event('submit')) }
        ]);
    },
    
    submitOrder(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        
        // 生成工单号
        const orderNumber = `WO-2026-${String(Math.floor(Math.random() * 9000) + 1000)}`;
        
        this.closeModal();
        this.showToast('success', '工单创建成功', `工单号: ${orderNumber}`);
    },
    
    showCustomerModal() {
        const content = `
            <form id="customerForm" onsubmit="App.submitCustomer(event)">
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">客户姓名</label>
                        <input type="text" class="form-input" name="name" placeholder="请输入客户姓名" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">联系电话</label>
                        <input type="tel" class="form-input" name="phone" placeholder="请输入联系电话" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">车牌号码</label>
                        <input type="text" class="form-input" name="plate" placeholder="如: 粤B·12345" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">车辆型号</label>
                        <input type="text" class="form-input" name="carModel" placeholder="如: 宝马 5系">
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label">客户类型</label>
                    <select class="form-select" name="type">
                        <option value="normal">普通客户</option>
                        <option value="vip">VIP客户</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">备注</label>
                    <textarea class="form-textarea" name="notes" placeholder="请输入备注信息"></textarea>
                </div>
            </form>
        `;
        
        this.showModal('新增客户', content, [
            { text: '取消', class: 'btn-outline', action: () => this.closeModal() },
            { text: '保存', class: 'btn-primary', action: () => document.getElementById('customerForm').dispatchEvent(new Event('submit')) }
        ]);
    },
    
    submitCustomer(e) {
        e.preventDefault();
        this.closeModal();
        this.showToast('success', '客户添加成功', '客户信息已保存');
    },
    
    showPartModal() {
        const content = `
            <form id="partForm" onsubmit="App.submitPart(event)">
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">配件名称</label>
                        <input type="text" class="form-input" name="name" placeholder="请输入配件名称" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">配件编号</label>
                        <input type="text" class="form-input" name="id" placeholder="如: P001" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">分类</label>
                        <select class="form-select" name="category" required>
                            <option value="">请选择分类</option>
                            <option value="机油">机油</option>
                            <option value="刹车系统">刹车系统</option>
                            <option value="滤芯">滤芯</option>
                            <option value="轮胎">轮胎</option>
                            <option value="电瓶">电瓶</option>
                            <option value="其他">其他</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">单价</label>
                        <input type="number" class="form-input" name="price" placeholder="请输入单价" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">库存数量</label>
                        <input type="number" class="form-input" name="stock" placeholder="当前库存" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">安全库存</label>
                        <input type="number" class="form-input" name="safeStock" placeholder="预警阈值" required>
                    </div>
                </div>
            </form>
        `;
        
        this.showModal('新增配件', content, [
            { text: '取消', class: 'btn-outline', action: () => this.closeModal() },
            { text: '保存', class: 'btn-primary', action: () => document.getElementById('partForm').dispatchEvent(new Event('submit')) }
        ]);
    },
    
    submitPart(e) {
        e.preventDefault();
        this.closeModal();
        this.showToast('success', '配件添加成功', '配件信息已保存');
    },
    
    showEmployeeModal() {
        const content = `
            <form id="employeeForm" onsubmit="App.submitEmployee(event)">
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">员工姓名</label>
                        <input type="text" class="form-input" name="name" placeholder="请输入姓名" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">联系电话</label>
                        <input type="tel" class="form-input" name="phone" placeholder="请输入联系电话" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">职位</label>
                        <select class="form-select" name="role" required>
                            <option value="">请选择职位</option>
                            <option value="高级技师">高级技师</option>
                            <option value="中级技师">中级技师</option>
                            <option value="初级技师">初级技师</option>
                            <option value="学徒">学徒</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">专长</label>
                        <input type="text" class="form-input" name="specialty" placeholder="如: 发动机专家">
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label">入职日期</label>
                    <input type="date" class="form-input" name="joinDate">
                </div>
            </form>
        `;
        
        this.showModal('新增员工', content, [
            { text: '取消', class: 'btn-outline', action: () => this.closeModal() },
            { text: '保存', class: 'btn-primary', action: () => document.getElementById('employeeForm').dispatchEvent(new Event('submit')) }
        ]);
    },
    
    submitEmployee(e) {
        e.preventDefault();
        this.closeModal();
        this.showToast('success', '员工添加成功', '员工信息已保存');
    },
    
    showModal(title, content, buttons) {
        // 创建模态框
        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.id = 'activeModal';
        
        const buttonsHtml = buttons.map((btn, i) => `
            <button class="btn ${btn.class}" data-index="${i}">${btn.text}</button>
        `).join('');
        
        modal.innerHTML = `
            <div class="modal">
                <div class="modal-header">
                    <h3 class="modal-title">${title}</h3>
                    <button class="modal-close" onclick="App.closeModal()">✕</button>
                </div>
                <div class="modal-body">
                    ${content}
                </div>
                <div class="modal-footer">
                    ${buttonsHtml}
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // 绑定按钮事件
        modal.querySelectorAll('.modal-footer .btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const index = parseInt(btn.dataset.index);
                buttons[index].action();
            });
        });
        
        // 点击背景关闭
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeModal();
            }
        });
        
        // 动画显示
        requestAnimationFrame(() => {
            modal.classList.add('active');
        });
    },
    
    closeModal() {
        const modal = document.getElementById('activeModal');
        if (modal) {
            modal.classList.remove('active');
            setTimeout(() => modal.remove(), 300);
        }
    },
    
    closeAllModals() {
        this.closeModal();
    },
    
    // ========================================
    // Toast 提示
    // ========================================
    
    showToast(type, title, message) {
        let container = document.querySelector('.toast-container');
        if (!container) {
            container = document.createElement('div');
            container.className = 'toast-container';
            document.body.appendChild(container);
        }
        
        const iconSvg = this.getToastIcon(type);
        
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `
            <svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                ${iconSvg}
            </svg>
            <div class="toast-content">
                <div class="toast-title">${title}</div>
                ${message ? `<div class="toast-message">${message}</div>` : ''}
            </div>
        `;
        
        container.appendChild(toast);
        
        // 3秒后自动消失
        setTimeout(() => {
            toast.style.animation = 'slideIn 0.3s ease reverse';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    },
    
    getToastIcon(type) {
        const icons = {
            success: '<path d="M20 6L9 17l-5-5"/>',
            error: '<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>',
            warning: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
            info: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>'
        };
        return icons[type] || icons.info;
    }
};

// 初始化应用
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
